import React, { useState } from 'react';
import './DTool.css';
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "41052665517141b6a60931faddba113b"
});

const COMPOSTABLE_ITEMS = ["food", "fruit", "water"];
const NON_COMPOSTABLE_ITEMS = ["plastic", "glass", "cutlery", "animal"];

function DTool() {

  const [compostable, setCompostable] = useState([]);
  const [nonCompostable, setNonCompostable] = useState([]);
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        // convert img file to a base64 string and make vision call
        const reader = new FileReader();
        reader.onloadend = () => {
          let b64Img = reader.result.replace(/^data:image.+;base64,/, '');
          analyseImg(b64Img);
        }
        reader.readAsDataURL(file);
        // display uploaded picture
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  const analyseImg = (imgFile) => {
    app.models
      .predict("aaa03c23b3724a16a56b629203edc62c", imgFile)
      .then((response) => {
        let concepts = response.outputs[0].data.concepts;
        getCompostable(concepts);
        getNotCompostable(concepts);
      })
      .catch((err) => console.log(err));
  };

  const getCompostable = (concepts) => {
    let items = []
    concepts.forEach(concept => {
      if (COMPOSTABLE_ITEMS.includes(concept.name) && concept.value > 0.90) {
        items.push(concept.name);
      }
    })
    return setCompostable(items);
  };

  const getNotCompostable = (concepts) => {
    let items = []
    concepts.forEach(concept => {
      if (NON_COMPOSTABLE_ITEMS.includes(concept.name) && concept.value > 0.90) {
        items.push(concept.name);
      }
    })
    return setNonCompostable(items);
  };

  return (
    <div className="dash-comp container pb-4">
      <div className="ml-4 pt-4">
        <h4>Compost Tool</h4>
        <p>
          Use the tool below to find out exactly what can and cannot be
          compostable!
        </p>
        {source &&
          <div display="flex" justifyContent="center" border={1}>
            <img src={source} alt={"snap"}></img>
          </div>}
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <p>The following compostable items were identified: {compostable.toString()}</p>
        <p>The following non-compostable items were identified: {nonCompostable.toString()}</p>
      </div>
    </div>
  );
}

export default DTool;

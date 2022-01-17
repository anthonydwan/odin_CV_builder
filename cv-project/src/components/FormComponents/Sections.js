import React from "react";
import DotPoint from "./Subsections";
import RenderTextInput from "./RenderTextInput";

function RenderCard(props) {
  const { sectionName, cardList, changeCard, addCard, removeCard } = props.card;
  const { subsecName, dpList, changeDP, addDP, removeDP } = props.dp;

  return (
    <React.Fragment>
      {Object.keys(cardList).map((cardIndex) => (
        <div
          className={`${sectionName}--block card--block`}
          key={`${sectionName}_${cardIndex}`}
          data-section={sectionName}
          data-prim-num={cardIndex}
        >
          <RenderTextInput
            passedObj={cardList[cardIndex]}
            handler={changeCard}
            index={cardIndex}
          />
          <DotPoint
            cardIndex={cardIndex}
            subsection={subsecName}
            dotptList={dpList}
            addHandler={addDP}
            removeHandler={removeDP}
            changeHandler={changeDP}
          />
          <button type="button" onClick={removeCard} data-prim-num={cardIndex}>
            Remove {`${sectionName}`}
          </button>
        </div>
      ))}
      <button type="button" onClick={addCard}>
        Add Work
      </button>
    </React.Fragment>
  );
}

export default RenderCard;

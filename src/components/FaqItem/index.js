// Write your code here.
import './index.css'

const FaqItemsList = props => {
  const {faqdetails, listHiddenItem} = props
  const {id, questionText, answerText, hide} = faqdetails
  const onHidingItem = () => {
    listHiddenItem(id)
  }

  const name = hide ? '' : 'hiding'
  return (
    <li className="list">
      <div className="questiontext">
        <h1 className="text">{questionText}</h1>
        {hide && (
          <img
            className="iconImage"
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            onClick={onHidingItem}
            alt="minus"
          />
        )}
        {!hide && (
          <img
            className="iconImage"
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            onClick={onHidingItem}
            alt="plus"
          />
        )}
      </div>

      <hr className={name} />
      <p className={`listparagraph ${name}`}>{answerText}</p>
    </li>
  )
}
export default FaqItemsList

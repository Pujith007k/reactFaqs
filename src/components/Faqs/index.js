// Write your code here.

import {Component} from 'react'

import FaqItemsList from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {initialItemList: ''}

  onlistHiddenItem = id => {
    const {faqsList} = this.props
    const updatedItem = faqsList.find(eachItem => eachItem.id === id)
    updatedItem.hide = !updatedItem.hide

    console.log(updatedItem)

    this.setState(prevState => ({
      initialItemList: [...prevState.initialItemList, updatedItem],
    }))
  }

  render() {
    const {faqsList} = this.props

    return (
      <div className="bgContainer">
        <div className="itemContainer">
          <h1 className="heading">FAQs</h1>
          <ul className="orderedList">
            {faqsList.map(eachItem => (
              <FaqItemsList
                faqdetails={eachItem}
                key={eachItem.id}
                listHiddenItem={this.onlistHiddenItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs

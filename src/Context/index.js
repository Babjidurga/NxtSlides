import React from 'react'

const SlideContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default SlideContext

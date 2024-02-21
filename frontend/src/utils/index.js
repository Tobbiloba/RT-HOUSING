// @ts-nocheck
// @ts-ignore
const handleAmmenitiesCheckboxChange = ({ item, values, setFieldValue }) => {
  // console.log(item)
  const currentAmenities = values.amenities || []
  // console.log(setFieldValue)
  if (currentAmenities.includes(item)) {
    // If yes, remove it
    const updatedAmenities = currentAmenities.filter(type => type !== item)
    setFieldValue('amenities', updatedAmenities)
  } else {
    // If not, add it
    const updatedAmenities = [...currentAmenities, item]
    setFieldValue('amenities', updatedAmenities)
  }
  // };
}

const handleAgentsCheckboxChange = ({ item, setFieldValue, values }) => {
  const isAgentActive = values && values.name === item.name

  if (isAgentActive) {
    // If the agent is already active, deactivate it
    setFieldValue('agent', null)
  } else {
    // If no agent is currently active, set the current agent as active
    setFieldValue('agent', { ...item })
  }
}

// const handleAgentsCheckboxChange = ({ item, setFieldValue, values }) => {
//   const currentAgents = values || []

//   // Check if the agent is already in the state based on the 'name' property
//   const existingIndex = currentAgents.findIndex(
//     existingAgent => existingAgent.name === item.name,
//   )

//    const updatedAgent = { ...item } // Modify this based on your object structure
//     // console.log(updatedAgent.name)
//     // const updatedAgents = [...currentAgents, updatedAgent]
//     setFieldValue('agent', {...item})
//   // if (existingIndex !== -1) {
//   //   // If yes, remove it
//   //   const updatedAgents = [...currentAgents]
//   //   updatedAgents.splice(existingIndex, 1)
//   //   setFieldValue('agent', updatedAgents)
//   // } else {
//   //   // console.log('else')
//   //   // If not, add it
//   //   const updatedAgent = { ...item } // Modify this based on your object structure
//   //   // console.log(updatedAgent.name)
//   //   const updatedAgents = [...currentAgents, updatedAgent]
//   //   // console.log(updatedAgents.length)
//   //   setFieldValue('agent', updatedAgents)
//   // }
// }

export { handleAmmenitiesCheckboxChange, handleAgentsCheckboxChange }

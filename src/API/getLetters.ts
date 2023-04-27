import client from "./client"

export const getLetters = async() => {
  const data = await client.get(`resolutions/${resolutionId}/letters?userId=${}` , {

  })

  return data.data
}
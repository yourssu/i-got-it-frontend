import api from '../api'

interface IpostResolution {
  period: 3 | 30
  content: string
  letter: string
  mail?: string
}

export const postResolution = async ({ period, content, letter, mail }: IpostResolution) => {
  return await api({
    method: 'post',
    url: '/api/v1/resolutions',
    data: {
      period,
      content,
      letter,
      mail,
    },
  })
}

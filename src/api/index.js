import data from './mockbackend.json'

class APIError extends Error {
  constructor (message) {
    super(message)
    this.name = 'APIError'
  }
}

export default {
  async getProfile (id) {
    let profile = data.users.find(u => u.id === id).map(u => { return {id: u.id, name: u.name} })
    if (!profile) {
      throw new APIError('user not found')
    }
    return profile
  },
  async getUser () {
    let cu = data.users.find(u => u.id === data['current_user'])
    if (!cu) {
      throw new APIError('unauthenticated')
    }
    return cu
  },
  async getClasses () {
    let cu = null
    try {
      cu = await this.getUser()
    } catch (e) {
      throw e
    }
    return data.classes.filter(c => c.members.find(m => m['user_id'] === cu.id)).map(c => c.id)
  },
  async getClass (id) {
    let cu = null
    try {
      cu = await this.getUser()
    } catch (e) {
      throw e
    }
    let c = data.classes.filter(c => c.members.find(m => m['user_id'] === cu.id)).find(c => c.id === id)
    if (!c) {
      throw new APIError('Could not get information about this class.')
    }
    return c
  },
  async getUnits (classID) {
    let c = null
    try {
      c = await this.getClass(classID)
    } catch (e) {
      throw e
    }
    return data.units.filter(unit => unit['class_id'] === c.id).map(unit => unit.id) || []
  },
  async getUnit (id) {
    try {
      await this.getClass(id)
    } catch (e) {
      throw e
    }
    let unit = data.units.find(unit => unit.id === id)
    if (!unit) {
      throw new APIError('Could not get information about this unit.')
    }
    return unit
  },
  async getQuestions (uid) {
    try {
      await this.getUnit(uid)
    } catch (e) {
      throw e
    }
    return data.questions.filter(q => q['unit_id'] === uid).map(q => q.id) || []
  },
  async getQuestion (id) {
    let question = data.questions.find(q => q.id === id)
    if (!question) {
      throw new APIError('Could not get information about this question.')
    }
    return question
  }
}

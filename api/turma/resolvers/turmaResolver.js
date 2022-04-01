const turmas = [
  {
    id: 1,
    descricao: 'básico',
  },
  {
    id: 2,
    descricao: 'intermediário',
  },
  {
    id: 3,
    descricao: 'avançado',
  }
]

const turmaResolver = {
  Query: {
    turmas: (parent, args, context, info) => {
      return turmas
    }
  },
}

module.exports = turmaResolver
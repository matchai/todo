exports.basic = {
  event: 'push',
  payload: {
    ref: 'refs/heads/master',
    commits: [
      {
        id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
        added: [],
        removed: [],
        modified: ['index.js']
      }
    ],
    head_commit: {
      id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
      author: { username: 'JasonEtco' }
    },
    repository: {
      name: 'test',
      owner: { login: 'JasonEtco' }
    },
    installation: {
      id: 10000
    }
  }
}

exports.many = {
  event: 'push',
  payload: {
    ref: 'refs/heads/master',
    commits: [
      {
        id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
        added: [],
        removed: [],
        modified: ['many.js']
      }
    ],
    head_commit: {
      id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
      author: { username: 'JasonEtco' }
    },
    repository: {
      name: 'test',
      owner: { login: 'JasonEtco' }
    },
    installation: {
      id: 10000
    }
  }
}

exports.complex = {
  event: 'push',
  payload: {
    ref: 'refs/heads/master',
    commits: [
      {
        id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
        added: [],
        removed: [],
        modified: ['index.js']
      },
      {
        id: 'q7d286aa6381bbb5045288496403d9427b0746e2',
        added: ['another.js'],
        removed: [],
        modified: []
      },
      {
        id: 's7d286aa6381bbb5045288496403d9427b0746e2',
        added: [],
        removed: [],
        modified: ['index.js']
      },
      {
        id: 's7d286aa6381bbb5045288496403d9427b0746e2',
        added: [],
        removed: [],
        modified: ['index.js']
      },
      {
        id: 's7d286aa6381bbb5045288496403d9427b0746e2',
        added: ['index.js'],
        removed: [],
        modified: []
      }
    ],
    head_commit: {
      id: 'f7d286aa6381bbb5045288496403d9427b0746e2',
      author: { username: 'JasonEtco' }
    },
    repository: {
      name: 'test',
      owner: { login: 'JasonEtco' }
    },
    installation: {
      id: 10000
    }
  }
}

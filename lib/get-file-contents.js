/**
 * Get the contents of a file
 * @param {object} context - Probot context object
 * @param {string} ref - SHA or ref
 * @param {string} path - File name
 * @returns {Promise<string>}
 */
module.exports = async function getContents (context, ref, path) {
  const repo = context.repo({path, ref})
  const {data} = await context.github.repos.getContent(repo)
  const decoded = await Buffer.from(data.content, 'base64').toString()
  return decoded
}

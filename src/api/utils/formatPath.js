/**
 * remove trailing slash
 * @param {string} path
 */
function removeTrail(path) {
  const exp = /^(\/.*[^/])\/?$/i.exec(path);
  if (exp && exp[1]) {
    return exp[1];
  } else {
    return '/';
  }
}

/**
 * format pathname
 * @param {string} path pathname starts with slash
 * @param {string} base base without trailing slash
 * @return {string} formated pathname without trailing slash
 */
function formatPath(path, base) {
  // format path
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  // remove search params and anchors
  const url = new URL(path, 'https://example.org');
  path = removeTrail(url.pathname);
  // remove base
  if (base && base !== '/') {
    path = path.split(removeTrail(base))[1] || '/';
  }
  return path;
}

module.exports = formatPath;

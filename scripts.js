/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"SjMaholPdjS0zGNX","label":"School","bookmarks":[{"id":"9YKE5lHBrGrZTMLz","label":"schoology","url":"https://csabacolod.schoology.com/login?&school=2685318683"},{"id":"TTAmu9Zo6qAWUwar","label":"gmail","url":"gmail.com"},{"id":"XXCD2G52D3j4iF13","label":"notion","url":"https://www.notion.so/Dashboard-5f16a3668c0d4165935532a80aba9b79"}]},{"id":"5JKaBY6tOdRSq6zt","label":"Humanity","bookmarks":[{"id":"0gmgQGmOY5VfOtjs","label":"messenger","url":"https://www.messenger.com/"},{"id":"SwTdqMAEzxlLZdE6","label":"discord","url":"https://discord.com/app"},{"id":"isNNZAB2PtTZXoa5","label":"myanimelist","url":"https://myanimelist.net/"}]},{"id":"kjewSEOXZIu4G0IK","label":"CatchUp","bookmarks":[{"id":"1fGIQrxA7WukFOiV","label":"shows and movies","url":"https://putlocker.pe/"},{"id":"YDvUuIStGEJ9Munw","label":"anime :0","url":"http://gogoanime.ar/"},{"id":"YDvUuIStGEJ9Munw","label":"youtub","url":"http://youtube.com/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()

function switchDiv() {
  var x = document.getElementById("newTab");
  var y = document.getElementById('class')
  if (x.style.top != '100vh') {
    x.style.top = '100vh';
    y.style.maxWidth = '70vw';
    setTimeout(() => {
      y.style.boxShadow = 'var(--surface-shadow)';
    }, 500);
    x.style.boxShadow = 'none';
  } else {
    x.style.top = '1vh';
    y.style.maxWidth = 'var(--surface-maxWidth)';
    y.style.boxShadow = 'none';
    setTimeout(() => {
      x.style.boxShadow = 'var(--surface-shadow)';
    }, 500);
  }
}
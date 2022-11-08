const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="https://animals.sandiegozoo.org/sites/default/files/2019-04/chinchilla-straw.jpg" alt="chinchilla" />
              </div>
              <div>
                Photo by <a href="https://animals.sandiegozoo.org/sites/default/files/2019-04/chinchilla-straw.jpg">San Diego Zoo</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

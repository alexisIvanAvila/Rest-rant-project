const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="chia fruit cake" />
              </div>
              <div>
                Photo by <a href="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">Brenda Godinez</a> on <a href="unsplashed link">unsplash</a>
              </div>
          </main>
      </Def>
    )
  }

  <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

  

module.exports = home

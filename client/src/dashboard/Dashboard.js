import React, {Component}  from 'react';



class Dashboard extends Component {
    state = {
        strikes: 0,
        balls: 0,
        hits: 0,
        fouls: 0
    }

//should natch the name in getbytext 
strikes = event => {
    event.preventDefault();
    let strikes = this.state.strikes;
    if(strikes === 3 ) {
        this.setState({ strikes: 0})
    } else {
      this.setState({ strikes: this.state.strikes + 1})   
    }
}

balls = event => {
    event.preventDefault();
    let balls = this.state.balls;
    if(balls >= 4) {
        this.setState({ balls: 0})
    } else {
        this.setState({ balls: this.state.balls + 1}) 
    }
}

hits = event => {
    event.preventDefault();
   this.setState({
    balls: 0,
    strikes: 0
    })
}

fouls = event => {
event.preventDefault();
let fouls = this.state.fouls;
let strikes = this.state.strikes;
    if ( !strikes) {
   this.setState({
    foul: fouls + 1,
    strikes:  1}) 
    } else if (strikes == 1) {
    this.setState({
        fouls: fouls + 1,
        strikes: 2
    })
    } else {  
     this.setState({ 
        fouls: this.state.fouls + 1,
        strikes: 2
    })
    }
    
}

    
    render() {
        return (
            <div>
            <h2>Dashboard</h2>
            <p>Please click this button that corresponds to the appropriate action </p>
            <> {this.state.strikes}
            <button onClick={this.strikes}>Strike</button>
            </>
            <> {this.state.balls}
            <button onClick={this.balls}>Balls</button>
            </>
            <> {this.state.hits}
            <button onClick={this.hits}>Hits</button>
            </>
            <> {this.state.fouls}
            <button onClick={this.fouls}>Fouls</button>
            </>
            </div>
        )
    }
}

export default Dashboard;
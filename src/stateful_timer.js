import React from 'react';


class Timer extends  React.Component {

constructor(props) {
 super(props)

this.state = {millisecond:0 , isstart : true}
this.Resettime = this.Resettime.bind(this)
this.Starttime = this.Starttime.bind(this)
this.Pausetime = this.Pausetime.bind(this)

this.incrementer = 0;
    }

Starttime () { 
     this.incrementer = setInterval(()=>this.setState({ millisecond: parseInt(this.state.millisecond) + 1000}),1000)
     this.setState({isstart:false})
}

Pausetime () {  
    clearInterval(this.incrementer) 
    this.setState({isstart:true})
}


Resettime = () => {
    this.setState({millisecond:0}) 
    clearInterval(this.incrementer)}

Startpause = () => {this.state.isstart? this.Starttime() : this.Pausetime()}

render() {
return ( <div className="timer">
<p className="time"> {Math.floor ((this.state.millisecond/1000) / (3600)).toString().padStart(2,'0')}:{Math.floor (((this.state.millisecond/1000) % (3600)) / (60)).toString().padStart(2,'0')}:{Math.floor ((this.state.millisecond/1000)% 60 ).toString().padStart(2,'0')}</p>
<p className="text">
<span>Hours</span>
<span>Minutes</span>
 <span>Seconds</span>
</p>
<div className="timercontrol">
 <input type="button" value = {this.state.isstart? "Start" : "Pause"} onClick={this.Startpause}  />
 <input type="reset" value = "Reset" onClick={this.Resettime} />
 </div>
 <p className="label"> Pass a time value in milliseconds to the component :  </p>
 <input className="millisecondsinput" type="text" value={this.state.millisecond} onChange={event=> this.setState({millisecond:event.target.value})} />
</div>
    );
}
}

export default Timer ;
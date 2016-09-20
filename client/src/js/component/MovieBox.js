var React= require('react');
var ReactDOM=require('react-dom');
var ChildSearch=require('./ChildSearch')
var ChildMain=require('./ChildMain')

var MovieBox=React.createClass({

  getInitialState: function(){
    return({text: "hello", movieArr:[], url: "http://omdbapi.com/?s="})
  },

  handleClick:function(data){
    $.ajax({
         url: this.state.url+data,
         dataType: 'json',
         cache: false,
         success: function(data) {

           this.setState({movieArr:data.Search});
           console.log(this.state.movieArr);
         }.bind(this),
         error: function(xhr, status, err) {
           console.error(this.state.url, status, err.toString());
         }.bind(this)
       });
  },

  render: function() {
    return (
        <div>
        <ChildSearch click={this.handleClick}/>
        <ChildMain sdata={this.state.text}   movieArr={this.state.movieArr}/>
        </div>
    )}
})

module.exports=MovieBox;

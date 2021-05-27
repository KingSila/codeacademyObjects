const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
     set _numOfSensors(num){
      if(typeof num === 'number' && num > 0){
        num = this._numOfSensors;
       
      }
    },
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    }

  };



  
  
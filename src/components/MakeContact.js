import React from 'react'

class MakeContact extends React.Component {
     state = {}
      render(){
            return(
                <div className="container" id="helper">
                <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Contacts Name</label>
                  <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Contacts name"/>
                </div>
                <div className="form-group">
                  <label for="email">Contacts email</label>
                  <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" name="email"/>
                </div>
                <div className="form-grou">
                 <label for="email">Relationship</label>
                  <input type="text" className="form-control" id="exampleCheck1" name="relationship" placeholder="Enter relationship" />
                </div>
                <div className="form-group">
                 <label for="phone">Phone number</label>
                <input type="text" className="form-control" id="exampleCheck1" name="phone"  placeholder="xxx-xx-xxxx" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              </div>

            )
      }
}

export default MakeContact

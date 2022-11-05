import React from "react"
import {UserContext,channelContext} from "./App"

const ComponentG = () =>{
  return(
        <div>
            <UserContext.Consumer>
              {
                username=>{
                  return(
                    <channelContext.Consumer>
                      {
                        channel=>{
                          return(
                            <h1>this is {username}'s {channel}</h1>
                          )
                        }
                      }
                    </channelContext.Consumer>
                  )
                }
              }
            </UserContext.Consumer>
        </div>
  )
}

export default ComponentG
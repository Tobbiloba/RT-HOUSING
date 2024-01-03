import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers";


export const login = async (req: express.Request, res: express.Response) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.sendStatus(400);
      }
      console.log(email, password)
      const user = await getUserByEmail(email);
      console.log(user)
      if (!user) {
        console.log('not found')
        return res.sendStatus(400);
      }
  
      // const expectedHash = authentication(user.authentication.salt, password);
      
      // if (user.authentication.password != expectedHash) {
      //   return res.sendStatus(403);
      // }
  
      // const salt = random();
      // user.authentication.sessionToken = authentication(salt, user._id.toString());
  
      // await user.save();
  
      // res.cookie('TOBBIE-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
  
      // return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };







export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, username, phone_number, firstname, lastname, age, country, state, city, street} = req.body;
        console.log('called')
        if(!email  || !username ) {
          console.log('param not complete')
            return res.status(400)
        } else {
          console.log('params passed check')
        }

        const existingUser = await getUserByEmail(email)

        if(existingUser) {
          console.log('user exists')
            return res.status(400)
        }


        const salt = random()

        const user = await createUser({
            email, username, phone_number, firstname, lastname, city: null, country: null, state: null, street: null,
            // authentication: {
            //     salt, password: authentication(salt, password)
            // }
        })

        console.log(user)

        return res.status(200).json(user).end()
    }
    catch(error) {
      console.log('error')
        console.log(error)
        return res.sendStatus(400)
    }
}
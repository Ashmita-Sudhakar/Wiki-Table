import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
 
 
 const Drawer=createDrawerNavigator();
const drawer =()=>{
  return(
    <Drawer.Navigator >
    <Drawer.Screen name="Dashboard" component={TabNaigator}/>
     <Drawer.Screen name="Settings" component={Settings}/>
    </Drawer.Navigator>

  )
}
export Default DrawerNavigator;
import { useState,useEffect } from "react";
import { fetchUsers } from "../../../Api/fetchUsers";

export async function useLogin({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

      


        if (username === "mimika" && password === "123") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  
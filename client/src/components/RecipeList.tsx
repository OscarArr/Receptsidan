import { useEffect, useState } from "react";

const RecipeList = () => {
  const recipes = async () => {
    const res = await fetch('https://localhost:4000/recipes')
    const recipes = await res.json()
  }

}
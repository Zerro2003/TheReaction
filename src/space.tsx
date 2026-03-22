import React from 'react';

export default function Space() {
    const [arr, setArr]= React.useState<string[]>([])
    let disp = arr.map((itm,ind)=> <p key={ind}>{itm}</p>)
    function handle(formData: FormData): void {
        const newIngr = formData.get('ingredient')
        if (typeof newIngr === 'string' && newIngr.trim() !== '') {
             setArr(prevIngr => [...prevIngr, newIngr]) 
        }
    }
    return (
        <main style={{padding: "20px", background: "#f5f5f5", textAlign: "center"}}>
            <h2>🍳 Ingredient List</h2>
            <form action={handle}>
                <input 
                    type="text" 
                    name="ingredient" 
                    placeholder="Enter ingredient"
                    required
                    style={{padding: "8px", marginRight: "10px"}}
                />
                <fieldset style={{margin: "10px 0"}}>
                    <input type="radio" name="size" value="small" />small
                    <input type="radio" name="size" value="medium" />medium
                    <input type="radio" name="size" value="large" />large
                </fieldset>
                <button type="submit" style={{padding: "8px 16px"}}>Add Ingredient</button>
            </form>
            <div style={{marginTop: "15px"}}>{disp}</div>
            <p style={{color: "#666"}}>{arr.length} ingredients added</p>
        </main> 
    )
}

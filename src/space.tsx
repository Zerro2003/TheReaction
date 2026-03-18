import React from 'react';

export default function Space() {
    const [arr, setArr]= React.useState<string[]>([])
    let disp = arr.map((itm,ind)=> <p key={ind}>{itm}</p>)
    function handle(formData: FormData): void {
        const newIngr = formData.get('ingredient')
        if (typeof newIngr === 'string') {
             setArr(prevIngr => [...prevIngr, newIngr]) }
    }
    // function afterSubmit(formData: FormData): void {
    //     const newIngri = formData.getAll('newIngri')
    // console.log(newIngri)
    // }
    return (
        <main className="h-80 bg-gray-500 text-center">
            <form action={handle} className="">
                <input 
                    type="text" 
                    name="ingredient" 
                    placeholder="Enter ingredient" 
                />
                <fieldset>
                    <input type="radio" name="size" value="small" />small
                    <input type="radio" name="size" value="medium" />medium
                    <input type="radio" name="size" value="large" />large
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="veg" value="veg" />veg
                    <input type="checkbox" name="veg" value="all" />aller
                    <input type="checkbox" name="veg" value="non-veg" />non-veg
                </fieldset>
                <button type="submit">Submit</button>
            </form>
            {disp}
        </main> 
    )
}

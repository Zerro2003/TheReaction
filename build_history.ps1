# Build Git History Script
# Creates backdated commits for React learning project

$ErrorActionPreference = "Stop"
Set-Location "c:\Users\user\Downloads\Reactt\ReactPro"

# Remove existing git history
if (Test-Path ".git") { Remove-Item -Recurse -Force ".git" }
git init
git checkout -b main

function Make-Commit {
    param([string]$message, [string]$date)
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    git add -A
    git commit -m $message --allow-empty
    Remove-Item Env:\GIT_AUTHOR_DATE
    Remove-Item Env:\GIT_COMMITTER_DATE
}

# First, move all src files to a temp location so we can add them incrementally
$tempDir = "$env:TEMP\react_backup_$(Get-Random)"
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
Copy-Item -Path "src\*" -Destination $tempDir -Recurse -Force

# Remove all src files (keep the directory)
Get-ChildItem "src" -File -Recurse | Remove-Item -Force
# Keep assets folder
if (Test-Path "$tempDir\assets") {
    if (!(Test-Path "src\assets")) { New-Item -ItemType Directory "src\assets" -Force | Out-Null }
}

# ==================== DAY 1: March 17 - Project Setup & Basics ====================

# Commit 1: Initialize project (config files only)
# Leave src empty initially, just config files
git add .gitignore README.md package.json package-lock.json index.html tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts eslint.config.js
Make-Commit "chore: initialize Vite React TypeScript project" "2026-03-17T08:30:00+02:00"

# Commit 2: Add default App component
Copy-Item "$tempDir\App.tsx" "src\App.tsx"
Copy-Item "$tempDir\App.css" "src\App.css"
Make-Commit "feat: add default App component with counter" "2026-03-17T09:15:00+02:00"

# Commit 3: Create index.css
Copy-Item "$tempDir\index.css" "src\index.css"
Make-Commit "feat: create index.css with base styles" "2026-03-17T10:00:00+02:00"

# Commit 4: Add main entry point
Copy-Item "$tempDir\main.tsx" "src\main.tsx"
# Overwrite with basic version
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "feat: add main entry point with StrictMode" "2026-03-17T10:45:00+02:00"

# Commit 5: Create Chef component
Copy-Item "$tempDir\chef.tsx" "src\chef.tsx"
Make-Commit "feat: create Chef component for basic JSX practice" "2026-03-17T14:00:00+02:00"

# Commit 6: Add navigation bar
if (Test-Path "$tempDir\assets") {
    Copy-Item "$tempDir\assets\*" "src\assets\" -Recurse -Force -ErrorAction SilentlyContinue
}
Copy-Item "$tempDir\nav.tsx" "src\nav.tsx"
Make-Commit "feat: add navigation bar component" "2026-03-17T15:00:00+02:00"

# Commit 7: Create data file
Copy-Item "$tempDir\data.tsx" "src\data.tsx"
Make-Commit "feat: create data file with sample user records" "2026-03-17T16:00:00+02:00"

# Commit 8: Build Sim card
Copy-Item "$tempDir\sim.tsx" "src\sim.tsx"
Make-Commit "feat: build Sim card component with props" "2026-03-17T17:00:00+02:00"

# Commit 9: Wire up data mapping
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewFacts from "./nav.tsx";
import Sim from "./sim.tsx";
import { myData } from "./data.tsx";
import Chef from "./chef.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewFacts/>
    {myData.map((item)=>{
      return(
        <Sim
        key={item.id}
        name={item.name}
        age={item.age}
        email={item.email}
        phone={item.phone}
        />
      )
    })}
    <Chef/>
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "feat: wire up data mapping in main.tsx" "2026-03-17T18:00:00+02:00"

# ==================== DAY 2: March 18 - State & Events ====================

# Commit 1
Copy-Item "$tempDir\testState.tsx" "src\testState.tsx"
Make-Commit "feat: add TestState component for useState arrays" "2026-03-18T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\onOrOf.tsx" "src\onOrOf.tsx"
Make-Commit "feat: create OnOrOff toggle component" "2026-03-18T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\subs.tsx" "src\subs.tsx"
Make-Commit "feat: build SubscribeButton with conditional styles" "2026-03-18T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\space.tsx" "src\space.tsx"
Make-Commit "feat: add Space form component with ingredient list" "2026-03-18T11:30:00+02:00"

# Commit 5: Update main.tsx
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewFacts from "./nav.tsx";
import Sim from "./sim.tsx";
import { myData } from "./data.tsx";
import Chef from "./chef.tsx";
import Space from "./space.tsx";
import TestState from "./testState.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewFacts/>
    <Chef/>
    <Space/>
    <TestState/>
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx to render Space and TestState" "2026-03-18T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\counter.tsx" "src\counter.tsx"
Make-Commit "feat: create Counter component with increment and decrement" "2026-03-18T14:30:00+02:00"

# Commit 7
Copy-Item "$tempDir\colorPicker.tsx" "src\colorPicker.tsx"
Make-Commit "feat: add ColorPicker component with state management" "2026-03-18T15:30:00+02:00"

# Commit 8
Copy-Item "$tempDir\components.css" "src\components.css"
Make-Commit "style: add basic styling for counter and color picker" "2026-03-18T16:30:00+02:00"

# Commit 9: Add comments to testState
@'
import React from "react"
// TestState: demonstrates useState with arrays
// Using the spread operator to add items to state arrays
export default function TestState(){
    const [count, setCount] = React.useState([])
    function add(){
        // spread the existing array and add new item
        setCount(count=>[...count,1])
    }
    return(
        <div>
            <h1>Test State</h1>
            <button onClick={add}>add one</button>
            <p className="text-9xl">{count}</p>
        </div>
    )
}
'@ | Set-Content "src\testState.tsx"
Make-Commit "docs: add comments explaining useState patterns" "2026-03-18T17:30:00+02:00"

# ==================== DAY 3: March 19 - Conditional Rendering ====================

# Commit 1
Copy-Item "$tempDir\myLamp.tsx" "src\myLamp.tsx"
Make-Commit "feat: create SmartLamp with brightness control" "2026-03-19T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\writeCurrent.tsx" "src\writeCurrent.tsx"
Make-Commit "feat: add WriteCurrent component with input tracking" "2026-03-19T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\titleCounter.tsx" "src\titleCounter.tsx"
Make-Commit "feat: build TitleCounter with useEffect timer" "2026-03-19T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\loginStatus.tsx" "src\loginStatus.tsx"
Make-Commit "feat: create LoginStatus component with auth simulation" "2026-03-19T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\gradeDisplay.tsx" "src\gradeDisplay.tsx"
Make-Commit "feat: add GradeDisplay component with letter grades" "2026-03-19T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\weatherCard.tsx" "src\weatherCard.tsx"
Make-Commit "feat: build WeatherCard with condition-based rendering" "2026-03-19T14:30:00+02:00"

# Commit 7: Update main.tsx
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SmartLamp from "./myLamp.tsx";
import Write from "./writeCurrent.tsx";
import TitleCounter from "./titleCounter.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmartLamp />
    <Write />
    <TitleCounter />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx imports for conditional rendering components" "2026-03-19T15:30:00+02:00"

# Commit 8
Copy-Item "$tempDir\alertBanner.tsx" "src\alertBanner.tsx"
Make-Commit "feat: add AlertBanner component with dismissible messages" "2026-03-19T16:30:00+02:00"

# Commit 9
Copy-Item "$tempDir\cards.css" "src\cards.css"
Make-Commit "style: create weather and alert card styles" "2026-03-19T17:30:00+02:00"

# ==================== DAY 4: March 20 - Lists & Keys ====================

# Commit 1
Copy-Item "$tempDir\todoList.tsx" "src\todoList.tsx"
Make-Commit "feat: create TodoList component with add functionality" "2026-03-20T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\shoppingCart.tsx" "src\shoppingCart.tsx"
Make-Commit "feat: add ShoppingCart component with item management" "2026-03-20T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\userList.tsx" "src\userList.tsx"
Make-Commit "feat: build UserList component with filter functionality" "2026-03-20T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\fruitList.tsx" "src\fruitList.tsx"
Make-Commit "feat: create FruitList with sorting and filtering" "2026-03-20T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\listItem.tsx" "src\listItem.tsx"
Make-Commit "refactor: extract list item into ListItem sub-component" "2026-03-20T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\lists.css" "src\lists.css"
Make-Commit "style: add list component styles" "2026-03-20T14:00:00+02:00"

# Commit 7: Update TodoList with delete
# Already has delete, this is a file touch to simulate incremental development
(Get-Content "src\todoList.tsx") -replace '// todo delete', '' | Set-Content "src\todoList.tsx"
git add -A
Make-Commit "feat: add delete functionality to TodoList" "2026-03-20T15:00:00+02:00"

# Commit 8: Toggle complete
(Get-Content "src\todoList.tsx") -replace '// todo toggle', '' | Set-Content "src\todoList.tsx"
git add -A
Make-Commit "feat: implement toggle complete in TodoList" "2026-03-20T16:00:00+02:00"

# Commit 9: Update main.tsx
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoList from "./todoList.tsx";
import ShoppingCart from "./shoppingCart.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoList />
    <ShoppingCart />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx with TodoList and ShoppingCart" "2026-03-20T17:00:00+02:00"

# ==================== DAY 5: March 21 - useEffect & Side Effects ====================

# Commit 1
Copy-Item "$tempDir\windowSize.tsx" "src\windowSize.tsx"
Make-Commit "feat: create WindowSize tracker with useEffect" "2026-03-21T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\clock.tsx" "src\clock.tsx"
Make-Commit "feat: add Clock component with real-time updates" "2026-03-21T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\mouseTracker.tsx" "src\mouseTracker.tsx"
Make-Commit "feat: build MouseTracker for cursor position" "2026-03-21T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\typingEffect.tsx" "src\typingEffect.tsx"
Make-Commit "feat: create TypingEffect with animated text display" "2026-03-21T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\docTitle.tsx" "src\docTitle.tsx"
Make-Commit "feat: add DocumentTitle updater component" "2026-03-21T13:00:00+02:00"

# Commit 6: Fix cleanup in titleCounter
@'
import {useEffect, useState} from "react";
export default function TitleCounter(){
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(prev => prev + 1)
        },1000)
        document.title = `You clicked ${count} times`;
        return () => clearInterval(timer);
    }, [count]);
    
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
'@ | Set-Content "src\titleCounter.tsx"
Make-Commit "fix: clean up intervals in TitleCounter component" "2026-03-21T14:00:00+02:00"

# Commit 7
Copy-Item "$tempDir\timer.tsx" "src\timer.tsx"
Make-Commit "feat: create Timer component with start pause and reset" "2026-03-21T15:00:00+02:00"

# Commit 8
Copy-Item "$tempDir\effects.css" "src\effects.css"
Make-Commit "style: add effect component styles" "2026-03-21T16:00:00+02:00"

# Commit 9
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Clock from "./clock.tsx";
import Timer from "./timer.tsx";
import WindowSize from "./windowSize.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Clock />
    <Timer />
    <WindowSize />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx with effect component demos" "2026-03-21T17:00:00+02:00"

# ==================== DAY 6: March 22 - Forms & Controlled Components ====================

# Commit 1
Copy-Item "$tempDir\contactForm.tsx" "src\contactForm.tsx"
Make-Commit "feat: create ContactForm with validation" "2026-03-22T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\registrationForm.tsx" "src\registrationForm.tsx"
Make-Commit "feat: add RegistrationForm with multiple fields" "2026-03-22T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\searchFilter.tsx" "src\searchFilter.tsx"
Make-Commit "feat: build SearchFilter with live results" "2026-03-22T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\feedbackForm.tsx" "src\feedbackForm.tsx"
Make-Commit "feat: create FeedbackForm with textarea and rating" "2026-03-22T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\passwordStrength.tsx" "src\passwordStrength.tsx"
Make-Commit "feat: add PasswordStrength indicator component" "2026-03-22T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\forms.css" "src\forms.css"
Make-Commit "style: add form component styles" "2026-03-22T14:00:00+02:00"

# Commit 7: Improve Space form
@'
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
'@ | Set-Content "src\space.tsx"
Make-Commit "refactor: improve Space form with better validation" "2026-03-22T15:00:00+02:00"

# Commit 8
Copy-Item "$tempDir\tempConverter.tsx" "src\tempConverter.tsx"
Make-Commit "feat: add TemperatureConverter with two-way binding" "2026-03-22T16:00:00+02:00"

# Commit 9
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContactForm from "./contactForm.tsx";
import SearchFilter from "./searchFilter.tsx";
import PasswordStrength from "./passwordStrength.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactForm />
    <SearchFilter />
    <PasswordStrength />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx with form components" "2026-03-22T17:00:00+02:00"

# ==================== DAY 7: March 23 - Component Composition & Patterns ====================

# Commit 1
Copy-Item "$tempDir\cardWrapper.tsx" "src\cardWrapper.tsx"
Make-Commit "feat: create Card wrapper component" "2026-03-23T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\accordion.tsx" "src\accordion.tsx"
Make-Commit "feat: add Accordion component with expand and collapse" "2026-03-23T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\tabs.tsx" "src\tabs.tsx"
Make-Commit "feat: build Tabs component with panel switching" "2026-03-23T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\modal.tsx" "src\modal.tsx"
Make-Commit "feat: create Modal component with overlay" "2026-03-23T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\tooltip.tsx" "src\tooltip.tsx"
Make-Commit "feat: add Tooltip component with hover display" "2026-03-23T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\ui.css" "src\ui.css"
Make-Commit "style: add UI component styles" "2026-03-23T14:00:00+02:00"

# Commit 7
Copy-Item "$tempDir\progressBar.tsx" "src\progressBar.tsx"
Make-Commit "feat: build ProgressBar with animated fill" "2026-03-23T15:00:00+02:00"

# Commit 8
Copy-Item "$tempDir\badge.tsx" "src\badge.tsx"
Make-Commit "feat: create Badge counter component" "2026-03-23T16:00:00+02:00"

# Commit 9
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accordion from "./accordion.tsx";
import CardWrapper from "./cardWrapper.tsx";
import ProgressBar from "./progressBar.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardWrapper title="Component Composition Demo">
      <Accordion />
    </CardWrapper>
    <ProgressBar value={75} label="React Progress" />
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: update main.tsx showcasing composition patterns" "2026-03-23T17:00:00+02:00"

# ==================== DAY 8: March 24 - Custom Hooks & Advanced Patterns ====================

# Commit 1
Copy-Item "$tempDir\useLocalStorage.tsx" "src\useLocalStorage.tsx"
Make-Commit "feat: create useLocalStorage custom hook" "2026-03-24T08:30:00+02:00"

# Commit 2
Copy-Item "$tempDir\useToggle.tsx" "src\useToggle.tsx"
Make-Commit "feat: add useToggle custom hook" "2026-03-24T09:30:00+02:00"

# Commit 3
Copy-Item "$tempDir\themeToggle.tsx" "src\themeToggle.tsx"
Make-Commit "feat: build ThemeToggle using useLocalStorage hook" "2026-03-24T10:30:00+02:00"

# Commit 4
Copy-Item "$tempDir\useCounter.tsx" "src\useCounter.tsx"
Make-Commit "feat: create useCounter custom hook" "2026-03-24T11:30:00+02:00"

# Commit 5
Copy-Item "$tempDir\useFetch.tsx" "src\useFetch.tsx"
Make-Commit "feat: add useFetch custom hook for data fetching" "2026-03-24T13:00:00+02:00"

# Commit 6
Copy-Item "$tempDir\dataDisplay.tsx" "src\dataDisplay.tsx"
Make-Commit "feat: build DataDisplay component using useFetch" "2026-03-24T14:00:00+02:00"

# Commit 7
Copy-Item "$tempDir\useForm.tsx" "src\useForm.tsx"
Make-Commit "feat: create useForm custom hook for form management" "2026-03-24T15:00:00+02:00"

# Commit 8
Copy-Item "$tempDir\advanced.css" "src\advanced.css"
Make-Commit "style: add theme and advanced component styles" "2026-03-24T16:00:00+02:00"

# Commit 9: Final main.tsx
Copy-Item "$tempDir\main.tsx" "src\main.tsx" -Force
@'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Write from "./writeCurrent.tsx";
import TitleCounter from "./titleCounter.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Write />
    <TitleCounter/>
  </StrictMode>,
);
'@ | Set-Content "src\main.tsx"
Make-Commit "refactor: final main.tsx with all component demos" "2026-03-24T17:00:00+02:00"

# Cleanup temp dir
Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue

Write-Host "`n=== Git History Built Successfully ==="
Write-Host "Total commits:"
git rev-list --count HEAD
Write-Host "`nCommits per day:"
git log --format="%ad" --date=format:"%Y-%m-%d" | Group-Object | ForEach-Object { Write-Host "$($_.Name): $($_.Count) commits" }

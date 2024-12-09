// // icons.js
// import React from 'react'

// const icons = () => {
//   return (
//     <div>icons</div>
//   )
// }

// export default icons

export const MoonIcon = () => {
    return (
        <>
            <img src="/src/assets/icons/moon-light.svg" alt="" width={16} className="w-5" />
        </>
    )
}

export const SunIcon = () => {
    return (
        <>
            <img src="/src/assets/icons/sun-light.svg" alt="" width={16} className="w-5" />
            <img src="/src/assets/icons/sun-light.svg" alt="" width={16} className="w-5 z-0 absolute hover:blur-sm" />
        </>
    )
}

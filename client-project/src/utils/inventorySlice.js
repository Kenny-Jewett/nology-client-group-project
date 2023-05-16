import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name:'inventory',
    initialState:{
        items:[{
            productId: 100,
            company:'Lenovo',
            productName:'ThinkPad X1 Yoga Gen6',
            price:'$1782',
            imgUrl:'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            productType:'laptop',
            description:`Meet the 6th generation of the ThinkPad X1 Yoga, a 35.5cms (14) 2-in-1 touchscreen laptop that’s been reimagined to enhance your experience.
            You’ll still find the details you’ve enjoyed on our premium X1 Yoga, and you’ll discover an impressive 16:10 display, a wider TouchPad, a larger battery for more time unplugged, and a new Storm Gray color with tone-matched keyboard.Plus, with the Intel® Evo® platform, you get a super-responsive device that’s ready whenever you need it.Lenovo’s CO2 Offset Services - Get the PC you want without compromising your environmental goals. Lenovo will cover the cost of your CO2 Offset services on PC purchases to help offset your emissions`
        },
        {
            productId: 101,
            company:'Samsung',
            productName:'Samsung - Galaxy Book3 360',
            price:'$1349.99',
            imgUrl:'https://images.pexels.com/photos/7974/pexels-photo.jpg',
            productType:'laptop',
            description:`Performance:
            From all night rabbit holes to hobbies to intensive DIY projects, explore your world at the speed of thought. This processor can keep up with your curiosity.            
            Thin, Light, Premium Design
            Explore your passions from just about anywhere with Galaxy Book3 360. Featuring a thin, lightweight design that’s made to move with you, this PC is always ready to help you pursue your interests.
            
            Big Screen / Entertainment
            Spread out on a brilliant AMOLED touch screen with plenty of space for all your passion projects, open multiple windows and hop between them all quickly and easily. This gorgeous 15.6" touchscreen lets you get hands on.
            
            Battery
            Explore without limits with a long lasting battery. Whether you’re a business professional, a hobbyist or something in between, this battery packs plenty of power to keep you moving untethered for hours.
            
            360 Touchscreen / S Pen
            Explore in new ways on an innovative 2-in-1 display. The screen folds back on a 360-degree hinge for amazing flexibility. Folded up, Galaxy Book3 360 works like a traditional laptop so you can answer emails or browse for info on your latest hobby.`
        },
        {
            productId: 103,
            company:'Dell',
            productName:'Dell - Inspiron 14.0" 2-in-1 Touch Laptop',
            price:'$949.99',
            imgUrl:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
            productType:'laptop',
            description:`Windows 11
            Windows 11 has all the power and security of Windows 10 with a redesigned and refreshed look. It also comes with new tools, sounds, and apps. Every detail has been considered. All of it comes together to bring you a refreshing experience on your PC
            
            14.0" FHD+ Touch Display
            Equipped with a FHD+ IPS touch screen, the border-less visual effect minimizes distractions offering better cinema, document and web browsing experience
            
            AMD Ryzen 7 7730U Processor
            Imagine, design and create without boundaries. The powerful AMD Ryzen 7 processor features machine intelligence that anticipates your needs. Discover true responsiveness with 8 cores and 16 threads for ultimate performance.
            
            16GB system memory for intense multitasking and gaming
            Reams of high-bandwidth LPDDR4x RAM to smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs all at once.
            
            1TB M.2 PCIe NVMe Solid State Drive
            While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
            
            Next-Level Spatial Audio
            Experience audio exactly as the artist intended with Dolby Atmos`
        }]
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload)
        },
        removeItem:(state,action) =>{
            state.items.pop();
        }
    }
});

export const{addItem,removeItem} = inventorySlice.actions;

export default inventorySlice.reducer;

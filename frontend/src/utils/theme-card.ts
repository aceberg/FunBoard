export const defaultThemes = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink"];

export function cardClass(color: keyof typeof colorClasses) {
    
    const c = colorClasses[color] ?? colorClasses.blue; // fallback
    
    return `border py-1 rounded ${c.bg} ${c.border} ${c.text}`;
};

const colorClasses = {
    red: {
        bg: "bg-red-100",
        border: "border-red-300",
        text: "text-red-800"
    },
    orange: {
        bg: "bg-orange-100",
        border: "border-orange-300",
        text: "text-orange-800"
    },
    amber: {
        bg: "bg-amber-100",
        border: "border-amber-300",
        text: "text-amber-800"
    },
    yellow: {
        bg: "bg-yellow-100",
        border: "border-yellow-300",
        text: "text-yellow-800"
    },
    lime: {
        bg: "bg-lime-100",
        border: "border-lime-300",
        text: "text-lime-800"
    },
    green: {
        bg: "bg-green-100",
        border: "border-green-300",
        text: "text-green-800"
    },
    emerald: {
        bg: "bg-emerald-100",
        border: "border-emerald-300",
        text: "text-emerald-800"
    },
    teal: {
        bg: "bg-teal-100",
        border: "border-teal-300",
        text: "text-teal-800"
    },
    cyan: {
        bg: "bg-cyan-100",
        border: "border-cyan-300",
        text: "text-cyan-800"
    },
    sky: {
        bg: "bg-sky-100",
        border: "border-sky-300",
        text: "text-sky-800"
    },
    blue: {
        bg: "bg-blue-100",
        border: "border-blue-300",
        text: "text-blue-800"
    },
    indigo: {
        bg: "bg-indigo-100",
        border: "border-indigo-300",
        text: "text-indigo-800"
    },
    violet: {
        bg: "bg-violet-100",
        border: "border-violet-300",
        text: "text-violet-800"
    },
    purple: {
        bg: "bg-purple-100",
        border: "border-purple-300",
        text: "text-purple-800"
    },
    fuchsia: {
        bg: "bg-fuchsia-100",
        border: "border-fuchsia-300",
        text: "text-fuchsia-800"
    },
    pink: {
        bg: "bg-pink-100",
        border: "border-pink-300",
        text: "text-pink-800"
    },
};

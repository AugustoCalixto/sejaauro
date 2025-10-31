export const FB_PIXEL_ID = "EAALilLLrbuMBPzbhCAe831ZC2EIaEIThlzO352IZC4SUqiGit5fNzBMCSKF5FRKGH12MoFxtv9ggptvZBI83MXZBbCQB3zKuwRiJq7ZCWYsA9z0xLqZCHCrJ2yctwwRZCfZCWS5ZAfvW9uuaK5tBaQHcLHg7RlzBDZB0lS4TkbDJwg8QKgboHz7aZAeLQmrODh7iwZDZD";

export const pageview = () => {
    window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, any> = {}) => {
    window.fbq("track", name, options);
};
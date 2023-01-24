import { elementBuilder, sectionBuilder } from "../functions.js";
import { profileData } from '../data.js'

const profile = () => {
    const profileElements = sectionBuilder("profile");
    const sectionProfile = profileElements[0];
    const profileContainer = profileElements[1];
    const profileRow = profileElements[2];
    profileRow.classList.add("text-left");
    const profileHead = elementBuilder("h1", "display-2", profileRow);
    profileHead.classList.add("fw-bold", "text-capitalize", "text-center");

    profileHead.innerHTML = "Profile";

    const profileArray = Object.keys(profileData).map(key => ({ key, value: profileData[key] }));

    for (const { key, value } of profileArray) {
        const profilePara = elementBuilder("p", "lead", profileRow);
        profilePara.innerHTML = value;
    }
}

export { profile }
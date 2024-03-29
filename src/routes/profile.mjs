import { Router } from "express";
import { getFilteredUsers, getUserData, updateContactInfo, updateDietInfo, updateEducationAndWorkInfo, updateFamilyInfo, updateHorrorscopeInfo, updateIdealPartnerInfo, updatePersonalInfo, updateUsersRelegionInfo } from "../handlers/registration.mjs";
import { authenticateToken } from "../utils/middlewares.mjs";

const router = Router();

router.use(authenticateToken);

router.post(
	"/api/getUserData/",
	getUserData
);
router.post(
	"/api/getFilteredUsers/",
	getFilteredUsers
);

router.post(
	"/api/updateFamilyInfo/",
	updateFamilyInfo
);

router.post(
	"/api/updateContactInfo/",
	updateContactInfo
);

router.post(
	"/api/updateDietInfo/",
	updateDietInfo
);

router.post(
	"/api/updateEducationAndWorkInfo/",
	updateEducationAndWorkInfo
);

router.post(
	"/api/updateHorrorscopeInfo/",
	updateHorrorscopeInfo
);

router.post(
	"/api/updateIdealPartnerInfo/",
	updateIdealPartnerInfo
);

router.post(
	"/api/updatePersonalInfo/",
	updatePersonalInfo
);
router.post(
	"/api/ updateUsersRelegionInfo/",
	updateUsersRelegionInfo
);


export default router;

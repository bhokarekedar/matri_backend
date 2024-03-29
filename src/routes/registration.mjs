import { Router } from "express";
import {
	query,
	validationResult,
	checkSchema,
	matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import { createUserHandler, getUserByIdHandler } from "../handlers/users.mjs";
import { createNewUser, getAllRelegions, getCasteData, getRelatedSubRelegions, loginUser } from "../handlers/registration.mjs";

const router = Router();

router.get(
	"/api/getAllRelegions/",
	getAllRelegions
);
router.post(
	"/api/getRelatedSubRelegions/",
	getRelatedSubRelegions
);
router.post(
	"/api/getRelatedCaste/",
	getCasteData
);

router.post(
	"/api/createUser/",
	createNewUser
);

router.post(
	"/api/loginUser/",
	loginUser
);


export default router;



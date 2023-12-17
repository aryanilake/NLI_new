import Member from "../model/memberSchema.js";
import Project from "../model/projSchema.js";

// member

// {
//     "about": "spk",
//     "active": "true",
//     "departmentclg": "ksok",
//     "contact": "98989899899",
//     "yearleft": "2/3/5555",
//     "domain": "kosk",
//     "email": "subhadip.s@gmail.com",
//     "fname": "subh",
//     "lname": "saa",
//     "linkedIn": "kpsk",
//     "project1": "kdnk",
//     "project2": "owpow",
//     "project3": "lsl",
//     "profile":''
//   }
export async function createmember(req, res) {
  try {
    const {
      fname,
      lname,
      email,
      yearleft,
      active,
      project1,
      project2,
      project3,
      domain,
      departmentclg,
      about,
      linkedin,
      profile ,
    } = req.body;

    // Check if the email already exists
    const existEmail = await Member.exists({ email });

    if (existEmail) {
      return res
        .status(400)
        .send({ error: "Member with this email already exists" });
    }

    // Create a new Member instance
    const member = new Member({
      fname,
      lname,
      yearleft: yearleft || 0,
      active,
      project1,
      project2,
      project3,
      domain,
      departmentclg,
      about,
      linkedin,
      profile: profile || "",
      email,
    });

    // Save the member to the database
    await member.save();

    // Return a success response
    res.status(201).send({ msg: "Member added successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}

export async function getMember(req, res) {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).send({ error: "Invalid Email" });
    }

    const member = await Member.findOne({ email });

    if (!member) {
      return res.status(404).send({ error: "Couldn't Find the Member" });
    }

    // Mongoose returns unnecessary data with the object, so convert it into JSON
    const { ...rest } = Object.assign({}, member.toJSON());

    return res.status(200).send(rest);
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
}

export async function getAllmembers(req, res) {
  try {
    const members = await Member.find({});
    return res.status(200).json(members);
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
}

// project

export async function createproject(req, res) {
  try {
    const { projname, dateStarted, active, about, projimg = "" } = req.body;

    // Check if the project already exists
    const existProj = await Project.exists({ projname });

    if (existProj) {
      return res
        .status(400)
        .send({ error: "Project with this name already exists" });
    }

    const project = new Project({
      projname,
      dateStarted,
      active,
      about,
      projimg: projimg || "",
    });

    await project.save();

    res.status(201).send({ msg: "Project added successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}

export async function getProject(req, res) {
  try {
    const { projname } = req.params;

    if (!projname) {
      return res.status(400).send({ error: "Invalid Project name" });
    }

    const project = await Project.findOne({ projname });

    if (!project) {
      return res.status(404).send({ error: "Couldn't Find the project" });
    }

    // Mongoose returns unnecessary data with the object, so convert it into JSON
    const { ...rest } = Object.assign({}, project.toJSON());

    return res.status(200).send(rest);
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
}

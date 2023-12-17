import React from "react";
import Headers from "../../components/Headers";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import StatBox from "../../components/StatBox";
import InputBase from "@mui/material/InputBase";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ProjectsData from "../../components/ProjectsData";

export default function Projects() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" overflow="scroll">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="Projects" subtitle="You're everything now" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Total Projects"
            icon={
              <Diversity1OutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Active"
            icon={
              <Diversity2OutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Completed"
            icon={
              <Diversity3OutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" p={2}>
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => window.open("/createproject", "_blank")}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Add Projects
        </Button>

        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlined />
          </IconButton>
        </Box>
      </Box>
      <ProjectsData />
    </Box>
  );
}

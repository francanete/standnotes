import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>StandNotes Docs</span>,
  project: {
    link: "https://github.com/francanete/standnotes",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase:
    "https://github.com/francanete/standnotes/blob/development/apps/docs",
  footer: {
    text: "StandNotes Documentation",
  },
};

export default config;

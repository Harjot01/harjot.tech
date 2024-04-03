"use server";

import { client } from "@/app/sanity";

// About Data
export const fetchAboutData = async () => {
  const query = `*[_type == 'about'][0]`
  const data = await client.fetch(query);
  return data;
}

// Project Data
export const fetchProjectData = async () => {
  const query = `*[_type == 'projects']{
    title,
    desc,
    liveLink,
    img,
    tags,
    githubLink,
    featuredProject
  }`;
  const data = await client.fetch(query);
  return data;
}

// Tech Data
export const fetchTechData = async () => {
  const query = `*[_type == 'technologies'][0]{
    tags,
    allTimelines
  }`
  const data = await client.fetch(query);
  return data;
}

// Github Data
export const fetchGithubData = async () => {
  const query = `*[_type == 'githubcode']`;
  const data = await client.fetch(query);
  return data;
}

// Blog Data
export const fetchBlogData = async () => {
  const query = `*[_type == 'blogs']`;
  const data = await client.fetch(query);
  return data;
}

// Social Links Data
export const fetchSocialLinksData = async() => {
    const query = `*[_type == 'about'][0]{
        githubProfile,
        hackerrankProfile,
        instagramProfile,
        leetcodeProfile,
        linkedinProfile
    }`;
    const data = await client.fetch(query);
    return data;
}

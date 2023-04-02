"use client";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Course from "../components/Course";
import SearchBar from "../components/SearchBar";

const courses = [
  {
    id: 1,
    title: "How to dominate Twitter",
    content:
      "4-step formula to give your tweets priority in the feed and boost your growth",
    img: "https://public-files.gumroad.com/kzanubwvtuf61db2g50u9pm56gku",
  },
  {
    id: 2,
    title: "Test",
    content: "Hello",
    img: "https://public-files.gumroad.com/kzanubwvtuf61db2g50u9pm56gku",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Categories />
      <SearchBar />
      {courses.map((course) => {
        return (
          <Course
            key={course.id}
            title={course.title}
            content={course.content}
            img={course.img}
          />
        );
      })}

      <Footer />
    </>
  );
}

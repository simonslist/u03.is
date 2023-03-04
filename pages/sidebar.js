/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"

const CategoryTitle = ({ children }) => {
  return (
    <h4 className="text-slate-900 dark:text-slate-400 pt-7 pb-2 text-lg">
      {children}
    </h4>
  )
}

const BlogLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-3 pb-1.5 no-underline pl-3 border-l border-slate-700 hover:text-slate-300 hover:border-slate-300"
    >
      {children}
    </Link>
  )
}

const Sidebar = () => {
  return (
    <div className="pl-7 pt-5 text-slate-600  flex flex-col">
      {/* <CategoryTitle>Promotional Links</CategoryTitle>
      {[
        ["1-on-1 Tutoring", "https://simontutors.com"],
        ["Online Course", "https://shsat.io"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}

      <CategoryTitle>Popular Links</CategoryTitle>
      {[
        ["Score Calculator", "/calculator"],
        ["Previous Cutoff Scores", "/cutoff-scores"],
        [
          "2022 DOE Guide to the SHSAT",
          "https://cdn-blob-prd.azureedge.net/prd-pws/docs/default-source/default-document-library/guide-to-the-specialized-high-schools-admissions-test-for-2022-admissions.pdf",
        ],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))} */}

      {/* <CategoryTitle>About Specialized High Schools</CategoryTitle>
      {[
        ["What are Specialized High Schools?", "/"],
        ["Stuyvesant", "/"],
        ["Bronx Science", "/"],
        ["Brooklyn Tech.", "/"],
        ["Math, Science and Engineering at City College", "/"],
        ["American Studies at Lehman College", "/"],
        ["Queens Sciences at York College", "/"],
        ["Staten Island Technical High School", "/"],
        ["Brooklyn Latin", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))} */}

      <CategoryTitle>Start Here!</CategoryTitle>
      {[
        ["What is the SHSAT?", "/what-is-the-shsat"],
        [
          "About the Specialized High Schools",
          "/about-the-specialized-high-schools",
        ],
        ["How to Prepare", "how-to-prepare"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}

      <CategoryTitle>Promotional Links</CategoryTitle>
      {[
        ["Best Workbooks for Prep", "/"],
        ["Supplies for Studying & Exam Day", "/cutoff-scores"],
        ["1-on-1 Tutoring", "/"],
        ["Online Course", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}

      {/* <CategoryTitle>How to prepare:</CategoryTitle>
      {[
        ["Become Familiar with Every SHSAT Topic", "/calculator"],
        ["Practice with Difficult Questions", "/cutoff-scores"],
        ["Take Practice Tests", "/"],
        ["Prepare for Test Day", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))} */}

      {/* <CategoryTitle>The Best Workbooks by Category</CategoryTitle>
      {[
        ["Introductory Explanations", "/"],
        ["Grammar Questions", "/"],
        ["Reading Passages", "/"],
        ["Challenging Math", "/"],
        ["Practice Tests", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))} */}

      <CategoryTitle>Revising/Editing Part A (Grammar) Topics</CategoryTitle>

      {[
        ["Best Grammar Workbooks", "/"],
        ["pronouns", "/"],
        ["subject-verb agreement", "/"],
        ["parenthetical phrases", "/"],
        ["modifiers", "/"],
        ["possesives", "/"],
        ["apostrophes", "/"],
        ["commas", "/"],
        ["dashes and hyphens", "/"],
        ["colons", "/"],
        ["semicolons", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}
      <CategoryTitle>Revising/Editing Part B (Structure) Topics</CategoryTitle>

      {[
        ["language misuse", "/"],
        ["supporting details", "/"],
        ["transitional words, phrases, or sentences", "/"],
        ["introductory and/or concluding statements", "/"],
        ["organization", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}
      <CategoryTitle>Reading Topics:</CategoryTitle>
      {[
        ["non-fiction", "/"],
        ["fiction", "/"],
        ["poetry", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}
      <CategoryTitle>Math Topics</CategoryTitle>
      {[
        ["absolute value", "/"],
        ["age problems", "/"],
        ["algebraic expressions", "/"],
        ["angles", "/"],
        ["averages and total", "/"],
        ["characteristics of quadrilaterals", "/"],
        ["circles- area, circumference, sectors", "/"],
        ["combining like terms", "/"],
        ["consecutive integers", "/"],
        ["constant rate", "/"],
        ["converting fractions, decimals, and percents", "/"],
        ["coordinate geometry", "/"],
        ["factoring", "/"],
        ["fractions", "/"],
        ["functions", "/"],
        ["graphs and tables- bar, line, frequency, etc.", "/"],
        ["inequalities", "/"],
        ["integers/whole numbers", "/"],
        ["interior angles of a polygon", "/"],
        ["intersecting lines", "/"],
        ["isosceles and equilateral triangles", "/"],
        ["LCM |GCF", "/"],
        ["length of an arc", "/"],
        ["linear equations", "/"],
        ["mean/average", "/"],
        ["metric system", "/"],
        ["midpoint", "/"],
        ["mixed numbers", "/"],
        ["monomials", "/"],
        ["multi-step story problems", "/"],
        ["multiplying binomials", "/"],
        ["negative and rational exponents", "/"],
        ["numerical expressions", "/"],
        ["parallel lines and transversals", "/"],
        ["patterns", "/"],
        ["PEMDAS", "/"],
        ["percent", "/"],
        ["percent increase and decrease", "/"],
        ["probability", "/"],
        ["proportions", "/"],
        ["pythagorean theorem", "/"],
        ["radicals", "/"],
        ["rates", "/"],
        ["ratios", "/"],
        ["revolutions", "/"],
        ["scale", "/"],
        ["scientific notation", "/"],
        ["shaded area", "/"],
        ["similar triangles", "/"],
        ["slope of a line", "/"],
        ["solve for variables", "/"],
        ["special right triangles", "/"],
        ["statistics", "/"],
        ["surface area and volume of 3d objects", "/"],
        ["time shift problems", "/"],
        ["unit conversion", "/"],
        ["volume", "/"],
        ["word problems", "/"],
      ].map(([title, url]) => (
        <BlogLink to={url}>{title}</BlogLink>
      ))}
    </div>
  )
}

export default Sidebar

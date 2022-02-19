import React, { useState, useEffect } from "react";
import Link from "next/Link";
import { getCategories } from "../services";

const categories = [{}];

export default function Header({ title }) {
  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="w-full inline-block py-8 text-center">
        <div className="md:float-center block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-6xl text-white main-logo">
              Braincode Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

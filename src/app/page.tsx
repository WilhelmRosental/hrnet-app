"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Form from "@/components/Form/Form";
import Employees from "@/components/Employees/Employees";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'employees'>('home');

  return (
    <main className={styles.main}>
      <Header />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' && (
        <div className={styles.homeContainer}>
          <h2 className={styles.heading}>Create Employee</h2>
          <Form />
        </div>
      )}
      {currentPage === 'employees' && <Employees />}
    </main>
  );
}

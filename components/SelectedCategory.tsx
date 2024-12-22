import React from 'react';
import { localDB } from '@/consts/localDB';
import { Col, Row } from './UI/Grid';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { Spacer } from './UI/spacer/spacer';

const cardVariants = cva(
  [
    'flex p-8 w-full h-4 items-center justify-center rounded-md  ',
    // accessibility
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-100  hover:bg-primary-300',
          ' dark:bg-primary-900 dark:hover:bg-primary-700',
        ],
        baseline: [
          'bg-baseline-100 hover:bg-baseline-300',
          'dark:bg-baseline-900',
        ],
        secondary: [
          'bg-secondary-100  hover:bg-secondary-300',
          ' dark:bg-secondary-900 dark:hover:bg-secondary-700',
        ],
        tertiary: [
          'bg-tertiary-100  hover:bg-tertiary-300',
          ' dark:bg-tertiary-900 dark:hover:bg-tertiary-700',
        ],
        error: [
          'bg-error-100  hover:bg-error-300',
          ' dark:bg-error-900 dark:hover:bg-error-700',
        ],
        success: [
          'bg-success-100  hover:bg-success-300',
          ' dark:bg-success-900 dark:hover:bg-success-700',
        ],
      },
    },
  }
);

function SelectedCategory() {
  return (
    <Row>
      <Col>
        <p className='text-xl text-baseline-600 '>Selected category</p>
      </Col>

      <Col lg={12} md={2} className='md:mb-6 sm:mb-6'>
        <div className={cardVariants({ variant: 'primary' })}>
          <p className='text-black dark:text-white'>
            {'Category name from params'}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default SelectedCategory;

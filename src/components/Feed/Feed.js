// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (

  <div className={styles['feed']}>
    {edges.map((edge) => (
      
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('D MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__item-button']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
    <ScrollUpButton />
  </div>
  
);

export default Feed;

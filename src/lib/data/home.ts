// src/lib/data/home.ts
import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { base } from '$app/paths';

export const avatar = `${base}/Anish.JPG`;
export const title = 'Home';
export const name = 'Anish';
export const lastName = 'Kanade';

// New! Your location string:
export const location = 'Cambridge, Massachusetts, United States';

// Restructured description with intro and styled bullet list
export const description = `
  <p><strong>Hi there!</strong> My name is Anish Kanade, a Computer Science graduate from UMass Boston who builds data-driven, cloud-powered applications.</p>
  <ul class="overview-list">
    <li><strong>Serverless ETL on AWS:</strong> Reduced data latency by 50% while maintaining 98% consistency.</li>
    <li><strong>React Frontend for HikeMate:</strong> Cut support tickets by 35% through responsive, reusable components.</li>
    <li><strong>Django Research Platform:</strong> Deployed on EC2/S3, labeled 15,000+ samples via Mechanical Turk, and boosted emotion-recognition accuracy by 15% with CNN & LSTM models.</li>
  </ul>
  <p class="overview-footer">I thrive in collaborative, agile teams and love tackling complex challenges with new technologies.</p>
`;

export const links: Array<{ platform: Platform; link: string }> = [
  { platform: Platform.GitHub, link: 'https://github.com/AnishKanade' },
  { platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/anish-kanade' },
  { platform: Platform.Email, link: 'AnishKanade45@gmail.com' }
];

export const skills = getSkills(
  'js','css','html','reactjs','sass','svelte','ts',
  'python','pandas','matplotlib','scikit-learn',
  'aws','docker','kubernetes','java','csharp','mysql','django'
);

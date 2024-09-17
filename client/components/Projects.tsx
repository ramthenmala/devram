"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import client from "@/client";
import { Card } from "./Card";

interface Project {
    _id: string;
    label: string;
    name: string;
    url: string;
    imageUrl: string;
    _createdAt: string;
    _updatedAt: string;
}

const query = `
*[_type == "featured"] {
  _id,
  label,
  name,
  url,
  "imageUrl": image.asset->url,
  _createdAt,
  _updatedAt
}
`;

export function Projects() {
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const result = await client.fetch<Project[]>(query);
                setFeaturedProjects(result);
            } catch (error) {
                console.error('Error fetching featured projects:', error);
            }
        }

        fetchProjects();
    }, []);

    const cards = featuredProjects.map((project, index) => (
        <Card
            key={project._id}
            card={{
                category: project.label,
                title: project.name,
                src: project.imageUrl,
                url: project.url,
                content: (
                    <div>
                        <p>{project.label} related content</p>
                    </div>
                ),
            }}
            index={index}
            layout={true}
            isFeatured={ true}
        />
    ));

    return (
        <div className="w-full h-full pb-12">
            <Carousel items={cards} />
        </div>
    );
}

import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import image from "./image.png"
import report from "./bachelor_project.pdf"

import { FaFileAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";


const Bachelor = () => {
  const git="https://github.com/jadetherras/bachelor_project"
  const lab="https://www.epfl.ch/labs/hessbellwald-lab/"

  return (
        <Card
        title={<p>A STUDY OF TDA<br/> METHODS FOR<br/> SCRNA VELOCITY</p>}
        bodyText="Use topology to predict cell differentiation - Bachelor project"
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">The project</h3>
            <p align="left">
            The project have been hosted by the laboratory of topology and neurosciences of EPFL. <br/><br/>
            Reducing and visualizing high dimensional data is a complex challenge, yet is an essential element of
research in computational biology. This paper examinate a particular type of high dimensional
data called RNA velocity, which consists of a point cloud of single cell RNA expression values along with
RNA velocity vectors. Visualizing RNA velocity in low dimensions requires a method to embed both the
point cloud and the velocity vector field.<br/><br/>
UMAP is the standard method for embedding the point cloud, and for the vector field, the predominant
algorithm is the ScVelo algorithm. These methods experience two main problems. Firstly, the two
embeddings depend on many arbitrary parameters, where it is difficult to get the best combination
for visualization. Secondly, we have no way to quantify the distortion of the data by the embedding.
Accordingly.<br/><br/>
This report presents how the RNA velocity embedding works, and make suggestions for its
improvement. Then, it explore the influence of parameters in UMAP and the ScVelo algorithm in both biological
and synthetic datasets. As a comparison, we tested learnable UMAP, a version of UMAP
with learnable parameters, and find that it outperforms UMAP in low-dimension synthetic point cloud
examples. Finally, we provided a way to quantify the accuracy of our method <br/><br/>
In the future, we envision that our method could be used to detect highly distorted regions of the vector
field by current embedding methods.
          </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub/>Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(lab)}><span class="text"><ImLab />See hosting lab</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={image}
      />
  );
}

export default Bachelor;
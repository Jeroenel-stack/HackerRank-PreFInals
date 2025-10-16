function steadyGene(gene) {
    const count = { A: 0, C: 0, G: 0, T: 0 };
    for (let i = 0; i < gene.length; i++) {
        count[gene[i]]++;
    }
    const max = Math.max(count.A, count.C, count.G, count.T);
    return max * 2 - gene.length;
}
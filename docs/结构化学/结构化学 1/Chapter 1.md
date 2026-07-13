# Chapter 1: 量子状态的描述

## 坐标和动量

$$
\begin{aligned}
\vec{V} = & \frac{\partial \vec{x}}{\partial t}, \vec{a} = \frac{\partial^2 \vec{x}}{\partial t^2}, \vec{F} = -\frac{\partial V}{\partial \vec{x}} = m \vec{a} \Rightarrow \vec{a} = - \frac{1}{m} \frac{\partial V}{\partial \vec{x}}\\
& \Downarrow\\
\frac{\partial}{\partial t}
\begin{pmatrix}
\vec{x} \\
\vec{v}
\end{pmatrix} = &
\begin{pmatrix}
\vec{v} \\
-\frac{1}{m} \frac{\partial V}{\partial \vec{x}}=\vec{a}
\end{pmatrix}
\end{aligned}
$$

疏密度分布：$A (\vec{x})$；干涉与相位：$\varphi (\vec{x})$。

## 单电子的本征状态

单电子的本征状态为波，用波函数 $\psi (\vec{x})$ 描述。   【量子状态表现为离域性】

## 波函数的统计规律 (玻恩诠释)

$|\psi(r)|^2dxdydz$ 表示在该体积元内找到 $\psi(r)$ 的概率。

$|\psi(r)|^2$ 称为概率密度，$|\psi(r)|^2=\psi^*(r) \psi(r)$​​。

$$
玻恩诠释的基本要求 (性质)
\left\{
\begin{aligned}
& 归一性: \int{|\psi(r)|^2 dx} = 1 \\
& 单值性: 函数要求单值 \\
& 有限性: 任意位置的模平方不能为无穷大\\
& (若 \exists x_1, x_2, \forall x \in (x_1, x_2), |\psi(x)|^2 = + \infty ，则不归一)\\
& 连续性: 波函数及各阶导数都应连续 \\
\end{aligned}
\right.
$$

归一化：通过数学变换，使得波函数的**模平方**在整个空间中的积分等于 1。

$$
\left.
\begin{aligned}
A = \int{|\psi(x, y, z)|^2dxdydz} \\
\psi'(x, y, z) = \frac{\psi(x, y, z)}{\sqrt{A}}
\end{aligned}
\right\}
\int{|\psi'(x, y, z)|^2 dxdydz}= 1
$$

$$
内在不定性:
\left\{
\begin{aligned}
& 常数因子不定性: 可任意乘某个常数因子 c , 即 \psi(r) 与 c \psi(r) 描述的是同一个量子态. \\
& 相位因子不定性: \psi(r) 与 \psi(r) e^{iS} 描述的也是同一个量子态.\quad \because |e^{iS}|^2 = e^{iS}×e^{-iS}= 1 \\
\end{aligned}
\right.
$$

$\Rightarrow$ 多粒子波函数：$\psi(\vec{r_1}, \vec{r_2}, \dots, \vec{r_N})$，$N$​为体系中的粒子数。 $|\psi(\vec{r_1}, \vec{r_2}, \dots, \vec{r_N})|^2 d^3r_1 d^3r_2 \dots d^3r_N$，

表示粒子 1 出现在 $(r_1, r_1+d r_1)$ 中，**同时**粒子 2 出现在 $(r_2, r_2+d r_2)$ 中，$\dots$  ，粒子 N 出现在 $(r_N, r_N+d r_N)$ 中的概率。

其概率密度为：$|\psi(\vec{r_1}, \vec{r_2}, \dots, \vec{r_N})|^2$   【由于各粒子之间有作用，无法单独拆成$\prod_{k=1}^{N}{\psi_k(\vec{r_k})}$】

由此我们得到**量子力学基本假设 1**:

<center><span style="font-size: 1.3em; font-weight: 600;">
    微观体系的状态由相应的归一化波函数描述
</span></center>

## 状态空间

欧几里得空间：有限维 实内积 空间   **【所有的三维向量构成欧几里得空间】**

希尔伯特空间：完备的 无限维 复内积 空间   **【对指定体系，所有可能的波函数构成希尔伯特空间，可类比向量研究波函数】**

( 波函数又称为 **波矢** )

因此我们定义内积：$(\psi, \varphi) \equiv \int{\psi^*(x) \varphi(x) dx}$；范数：$\lVert \psi \rVert = \sqrt{(\psi, \psi)}$，正交：$(\psi, \varphi)=0$。

内积的性质$\left\{
\begin{aligned}
& 对称性: (\psi, \varphi) = (\varphi, \psi)^* \\
& 线性性: (c_1 \psi_1 + c_2 \psi_2, \varphi)= c_1^* (\psi_1, \varphi) + c_2^* (\psi_2, \varphi) \\
& 正定性: (\psi, \psi) \in \mathbb{R}, (\psi, \psi) \geqslant 0, 当且仅当 \psi \equiv 0 \\
\end{aligned}
\right.$

> $$
> \begin{aligned}
> & 证明: \\
> & (\varphi, \psi)^*=(\int \varphi^* \psi dx)^*=(\int \psi^* \varphi dx)=(\psi, \varphi) \\
> & (c_1 \psi_1 + c_2 \psi_2, \varphi) = \int(c_1 \psi_1 + c_2 \psi_2)^* \varphi dx = c_1^* \int \psi_1^* \varphi dx+c_2^* \int \psi_2^* \varphi dx = c_1^* (\psi_1, \varphi) + c_2^* (\psi_2, \varphi)
> \end{aligned}
> $$

**完备基：** 如果一组相互正交的波函数，其线性组合可以组成所有可能的波函数，则称这些波函数组成完备基组，简称完备基。

$$
\psi(x) = \sum_i c_i \phi_i, \int \phi_i^* \phi_{j(\neq i)}dx = 0, \int \phi_i^* \phi_i dx = 1
$$

$$
\therefore 1 = (\psi, \psi)=\sum_i \sum_j c_i^* c_j \int \phi_i^* \phi_j dx =\sum_i \sum_j c_i^* c_j \delta_{ij}=\sum_i |c_i|^2
$$

## 平面波 (无法归一化)

$\psi_p (x)=e^{i p x / \hbar}$，$|\psi_p (x)|^2=1$。

对 $\left.
\begin{aligned}
\phi_i (x) = e^{i p_i x / \hbar}& \\
\phi_{j(\neq i)} (x) = e^{i p_j x / \hbar}& \\
\end{aligned}
\right\}
(\phi_i, \phi_j)=\int_{-\infty}^{+\infty} e^{-i(p_i-p_j)x/\hbar}dx = 0$，从而得到正交性。

 $【\because 周期性要求:  \int_T e^{-i(p_i-p_j)x/\hbar}dx=0】$

**波函数的傅里叶变换：** $\psi(x)=(2 \pi \hbar)^{-1/2} \int \psi(p) e^{i p x / \hbar} dp$   【所有的平面波构成完备基】

​$\Rightarrow |\psi(p)|^2$为波函数$\psi(x)$中动量为$p$的平面波$e^{ipx/\hbar}$​对应的概率密度

**波函数的逆傅里叶变换：** $\psi(p)=(2\pi\hbar)^{-1/2} \int \psi(x) e^{-ipx/\hbar} dx$

## $\delta$ 函数 (广义函数)

我们定义：

$$
\delta(x)=\left\{
\begin{aligned}+& \infty & (x = 0) \\
& 0 & (x \neq 0)
\end{aligned}
\right.$，$\int_a^b\delta(x)dx =
\left\{
\begin{aligned}
& 0 & (ab > 0) \\
& 1 & (ab < 0)
\end{aligned}
\right.
$$

特殊性质：$\int_{-\infty}^{+\infty}\delta(x-x_0)f(x)dx=f(x_0)$

典型的$\delta$函数形式：$\delta(x)=(2\pi)^{-1}\int_{-\infty}^{+\infty}e^{ikx}dx$

$\psi(x)=e^{ip_0x/\hbar}$​

$(2\pi\hbar)^{-1/2}\int \psi(x) e^{-ipx/\hbar} dx =(2\pi\hbar)^{-1/2}\int e^{i(p-p_0)x/\hbar} dx$ ~ $\delta(p-p_0)$

## 期望值与不确定度

**期望：** $\overline{x}=\int x|\psi(x)|^2dx$

**不确定度：** $\Delta x=(\overline{(x-\overline{x})^2})^{1/2}=(\int |\psi(x)|^2 (x-\overline{x})^2 dx)^{1/2}$

## 高斯波包

$\psi(x)=(2\pi\sigma^2\hbar)^{-1/4}$ exp $[-\frac{(x-x_0)^2}{4\sigma^2}+i\frac{p_0x}{\hbar}]$，参数为：$x_0, p_0, \sigma$。

其动量分布为：$\psi(p)=(2\pi\hbar)^{-1/2}(2\pi\sigma^2\hbar)^{-1/4}\int$ exp $[-\frac{(x-x_0)^2}{4\sigma^2}-i\frac{(p-p_0)x}{\hbar}]dx$。

对所有高斯波包都存在等式：$\Delta x \Delta p=\hbar/2$。

$Heisenberg不确定性关系: \Delta x \Delta p \geqslant \hbar/2$

## 态叠加原理

**本征态：** 不确定度为 0 的波函数称为相应物理量的本征态。   【平面波是动量的本征态，$\delta$函数是坐标的本征态】

**量子叠加态：** 用 $\psi$ 去测量 $A$ ，得到的期望值 $\overline{a}=\sum |c_i|^2 a_i$ ，$a_i$ 是本征态对应的本征值。

**不确定性：** 由于测量具有破坏性，会使相干的波函数进行退相干。
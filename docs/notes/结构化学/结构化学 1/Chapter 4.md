# Chapter 4: 可观测量与算符

## 算符

算符是对波函数的一种运算，将一个算符作用于希尔伯特空间的一个波函数，能够得到另一个波函数，即：$\hat{O} \psi = \psi'$

**<span style="color:#ee9622">算符相等：</span>** $\forall \psi , \hat{A}\psi=\hat{B}\psi$，则称算符 $\hat{A}$ 与 $\hat{B}$ 相等。

**<span style="color:#ee9622">线性算符：</span>** 若 $\hat{O}(c_1\psi_1+c_2\psi_2)=c_1\hat{O}\psi_1+c_2\hat{O}\psi_2$ ，则称 $\hat{O}$ 为线性算符。

**<span style="color:#ee9622">单位算符：</span>** 若 $\hat{I}\psi=\psi$ ，则称 $\hat{I}$ 为单位算符，显然单位算符是线性算符。

<center>
    <h1 style="font-size: 1.5em;color:rgb(255,0,0)"> 量子力学基本假设 2：力学量由相应的线性算符表示 </h1>
</center>


## 期望值与算符

如果任意可观察量的期望值都可以通过实空间波函数的积分计算得到，即：

$\overline{O}=\int \psi^*(x) \hat{O}\psi(x) dx$

则我们需要将可观察量的算符都表达成坐标的某种函数形式。

根据该定义，坐标算符就是坐标本身：$\hat{x}=x$。

> 对平面波 $\psi(p)=e^{ipx/\hbar}$，$\overline{p}=p$，$\Delta p=0$。
>
> $$
> \therefore
> \left\{
> \begin{aligned}
> \overline{p} = p &= \int e^{-ipx/\hbar}\hat{p}e^{ipx/\hbar} dx \\
> \Delta p = 0 &= \int e^{-ipx/\hbar}(\hat{p}-p)^2e^{ipx/\hbar}dx =\int e^{-ipx/\hbar}(\hat{p}^2-2p\hat{p}+p^2)e^{ipx/\hbar}dx \\
> &=\int e^{-ipx/\hbar}(\hat{p}^2-p^2)e^{ipx/\hbar}dx \Rightarrow \int e^{-ipx/\hbar}\hat{p}^2e^{ipx/\hbar}dx = p^2
> \end{aligned}
> \right.\\
> \color{red} \Leftarrow \hat{p}e^{ipx/\hbar}= pe^{ipx/\hbar} \Leftarrow \hat{p}=-i\hbar\frac{\partial}{\partial x}
> $$
>
> 引申：三维动量算符：$\hat{p}=-i\hbar(\frac{\partial}{\partial x}\vec{i}+\frac{\partial}{\partial y}\vec{j}+\frac{\partial}{\partial z}\vec{k})=-i\hbar \vec{\nabla}$。

## 算符的和与积

**<span style="color:#ee9622">算符的和：</span>** $\forall \psi , \hat{O}\psi=(\hat{O_1}+\hat{O_2})\psi=\hat{O_1}\psi+\hat{O_2}\psi$，则称算符 $\hat{O}$ 为 $\hat{O_1}$ 与 $\hat{O_2}$ 的和。 <span style="color:#22dd48">【满足交换律和结合律】</span>

**<span style="color:#ee9622">算符的积：</span>** $\forall \psi , \hat{O}\psi=\hat{O_1}(\hat{O_2}\psi)=\hat{O_1}\hat{O_2}\psi$，则称算符 $\hat{O}$ 为 $\hat{O_1}$ 与 $\hat{O_2}$ 的积。<span style="color:#22dd48">【通常不满足交换律，除非$[\hat{O_1}, \hat{O_2}]=0$​】</span>

**<span style="color:#ee9622">一次量子化：</span>** 经典物理量都是坐标和动量的函数，通过将坐标和动量替换为相应的算符，可将任意可观测量转化为相应的算符，即：$x \rightarrow \hat{x} \equiv x$，$p \rightarrow \hat{p} \equiv -i\hbar\frac{\partial}{\partial x}$，$O(x,p) \rightarrow \hat{O}(\hat{x},\hat{p}) \equiv \hat{O}(x, -i\hbar\frac{\partial}{\partial x})$​。

> 能量：
>
> $$E=\frac{p^2}{2m}+V(x) \rightarrow \hat{H}=\frac{\hat p^2}{2m}+V(\hat x)=-\frac{h^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)$$
>
> 角动量：
> 
> $$\vec{L}=\vec{r} \times \vec{p} \rightarrow \hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}} = -i\hbar(\vec{r} \times \vec{\nabla}) = -i\hbar \begin{vmatrix}
> \vec{i} & \vec{j} &\vec{k} \\
> x & y & z \\
> \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
> \end{vmatrix} $$

**<span style="color:#ee9622">算符函数：</span>** 对函数 $F(x)$ ，我们可以作泰勒幂级数展开，得：$F(x)=\sum_{n=0}^{+\infty} \frac{F^{(n)}(0)}{n!}x^n$；类似地，我们定义算符函数：$F(\hat{O})=\sum_{n=0}^{+\infty} \frac{F^{(n)}(0)}{n!}\hat{O}^n$。

> 取 $F(x)=e^{ax}$ ，则 $F(x)=\sum_{n=0}^{+\infty} \frac{F^{(n)}(0)}{n!}x^n=\sum_{n=0}^{+\infty} \frac{a^n}{n!}x^n$。
>
> 故有：$F(\frac{d}{dx})\psi(x)=\sum_{n=0}^{+\infty} \frac{a^n}{n!}\frac{d^n\psi(x)}{dx^n}=\sum_{n=0}^{+\infty} \frac{\psi^{(n)}(x)}{n!}a^n=\psi(x+a)$。
>
> 我们称 **<span style="color:blue">$e^{a\frac{d}{dx}}$</span>** 为坐标偏移算符。

## 算符的对易子

**<span style="color:#ee9622">定义：</span>** $[\hat{A}, \hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}$，若 $[\hat{A}, \hat{B}]=0$ ，即 $\hat{A}\hat{B}=\hat{B}\hat{A}$ ，则称 $\hat{A}$ 与 $\hat{B}$ 可对易。

**<span style="color:red">基本对易关系：$[\hat{x},\hat{p}]=i\hbar$</span>**

不同自由度算符间的对易子：$[\hat{x_\alpha},\hat{x_\beta}]=0$，$[\hat{p_\alpha},\hat{p_\beta}]=0$，$[\hat{x_\alpha},\hat{p_\beta}]=i\hbar \delta_{\alpha\beta}$，$\alpha,\beta=x,y,z$

> $$
> [\hat{x},\hat{p}]\psi =\hat{x}\hat{p}\psi-\hat{p}\hat{x}\psi =-i\hbar\bigg [x\frac{\partial}{\partial x}\psi-\frac{\partial}{\partial x}(x\psi)\bigg] =-i\hbar\bigg [x\frac{\partial}{\partial x}\psi-\bigg(\psi+x\frac{\partial}{\partial x}\psi \bigg)\bigg] = i\hbar\psi \\
> \therefore [\hat{x},\hat{p}] = i\hbar
> $$

**<span style="color:#c211ee">对易子的基本公式：</span>**

$[\hat{A},\hat{B}]=-[\hat{B},\hat{A}]$​

$[\hat{A},\hat{B}\hat{C}]=[\hat{A},\hat{B}]\hat{C}+\hat{B}[\hat{A},\hat{C}]$

$[\hat{A},\hat{B}+\hat{C}]=[\hat{A},\hat{B}]+[\hat{A},\hat{C}]$

$[\hat{A}\hat{B},\hat{C}]=[\hat{A},\hat{C}]\hat{B}+\hat{A}[\hat{B},\hat{C}]$

$[\hat{A},[\hat{B},\hat{C}]]+[\hat{B},[\hat{C},\hat{A}]]+[\hat{C},[\hat{A},\hat{B}]]=0$ <span style="color:#c211ee">（Jacobi恒等式）</span>

> 上述各式仅需展开即可证明，此处略。

同时，我们需要注意，对易关系不具有链式法则，例如：

$$
\left.
\begin{aligned}
\big [\hat{p_x},\hat{p_y}\big]&= 0 \\
\big [\hat{p_y},\hat{x}\big]&= 0 \\
\end{aligned}
\right\}
\nRightarrow \big [\hat{p_x},\hat{x}\big] = 0, 显然\big [\hat{p_x},\hat{x}\big] =-\big [\hat{x},\hat{p_x}\big] =-i\hbar
$$

## 逆算符

$\forall \psi, \hat{O_1}\psi=\phi,$ 若 $\exists \hat{O_2}, \hat{O_2}\phi=\psi,$ 则称 $\hat{O_2}$ 为 $\hat{O_1}$ 的逆算符，记为 $\hat{O_2}=\hat{O_1}^{-1}$。

<span style="color:blue">【不是所有的算符都存在逆算符】</span>

若 $\hat{A}$ 与 $\hat{B}$ 都存在逆算符，则有：$(\hat{A}\hat{B})^{-1}=\hat{B}^{-1}\hat{A}^{-1}$。

> $$
> \begin{aligned}
> &\hat{A}\hat{B}\hat{B}^{-1}\hat{A}^{-1}=\hat{A}(\hat{B}\hat{B}^{-1})\hat{A}^{-1}=\hat{A}\hat{I}\hat{A}^{-1}=\hat{A}\hat{A}^{-1}=\hat{I}\\
> \Rightarrow &(\hat{A}\hat{B})^{-1}=(\hat{A}\hat{B})^{-1}\hat{A}\hat{B}\hat{B}^{-1}\hat{A}^{-1}=\big [(\hat{A}\hat{B})^{-1}\hat{A}\hat{B}\big]\hat{B}^{-1}\hat{A}^{-1}=\hat{B}^{-1}\hat{A}^{-1}
> \end{aligned}
> $$

## 算符的转置

$\forall \psi,\phi,$ 若 $\exists \hat{O_1} \hat{O_2}, \int\psi^*\hat{O_1}\phi dx=\int\phi\hat{O_2}\psi^*dx ,$ 则称 $\hat{O_2}$ 为 $\hat{O_1}$ 的转置，记为 $\hat{O_2}=\hat{O_1}^T$，且有：$(\hat{A}\hat{B})^T=\hat{B}^T\hat{A}^T$。

> $$
> \begin{aligned}
> \int\psi^*(\hat{A}\hat{B})^T\phi dx &= \int\phi\hat{A}\hat{B}\psi^* dx =\int\phi\hat{A}(\hat{B}^*\psi)^* dx \\
> &= \int(\hat{B}^*\psi)^*\hat{A}^T\phi dx =\int(\hat{A}^T\phi)\hat{B}\psi^*dx =\int\psi^*\hat{B}^T\hat{A}^T\phi dx
> \end{aligned}
> $$

那么如何计算算符的转置？

> e.g.1：求 $\hat{p}_x^T$
>
> $$
> \begin{aligned}
> &\int\psi^*(\frac{\partial}{\partial x})^T\phi dx =\int\phi(\frac{\partial}{\partial x})\psi^* dx =\int\phi d(\psi^*)=\phi\psi^*\bigg|_{-\infty}^{+\infty}-\int\psi^*(\frac{\partial}{\partial x})\phi dx\\
> &\because 波函数在无穷远处趋于 0. \Rightarrow \int\psi^*(\frac{\partial}{\partial x})^T\phi dx+\int\psi^*(\frac{\partial}{\partial x})\phi dx =\phi\psi^*\bigg|_{-\infty}^{+\infty}= 0\\
> &\Rightarrow (\frac{\partial}{\partial x})^T+(\frac{\partial}{\partial x})= 0 \Rightarrow (\frac{\partial}{\partial x})^T =-\frac{\partial}{\partial x}, 即\hat{p}_x^T =-\hat{p}_x .
> \end{aligned}
> $$
>
> e.g.2：求 $\hat{x}^T$
>
> $$
> \int\psi^*\hat{x}^T\phi dx =\int\phi\hat{x}\psi^* dx =\int\psi^*\hat{x}\phi dx,\hat{x}^T =\hat{x}= x
> $$

## 算符的复共轭和厄米共轭

**<span style="color:#ee9622">复共轭：</span>** 算符 $\hat{O}$ 的复共轭算符 $\hat{O}^*$ 就是把 $\hat{O}$ 表达式中的所有量都换成其复共轭。

例如：$\hat{p}^*=(-i\hbar\nabla)^*=i\hbar\nabla=-\hat{p}$

**<span style="color:#ee9622">厄米共轭：</span>** $\forall \psi,\phi,$ 若 $\exists \hat{O_1} \hat{O_2}, \int\psi^*\hat{O_1}\phi dx=\int(\hat{O_2}\psi)^*\phi dx ,$ 则称 $\hat{O_2}$ 为 $\hat{O_1}$ 的厄米共轭，记为 $\hat{O_2}=\hat{O_1}^+$

【此处提请读者注意，厄米共轭本应记作 $\hat{O}^\dagger$，右上角为\dagger，+ 号是手写简化】​

> $$
> \begin{aligned}
> &\int\psi^*\hat{O}^+\phi dx =\int(\hat{O}\psi)^*\phi dx =\int\phi\hat{O}^*\psi^* dx =\int\psi^*\hat{O}^{* T}\phi dx\\
> &\therefore \hat{O}^+=\hat{O}^{*T}\\
> &\therefore (\hat{A}\hat{B})^+=\hat{B}^+\hat{A}^+,(\hat{A}\hat{B}\hat{C})^+=(\hat{B}\hat{C})^+\hat{A}^+=\hat{C}^+\hat{B}^+\hat{A}^+
> \end{aligned}
> $$

## 厄米算符

$\forall \psi,\phi, \int\psi^*\hat{O}\phi dx=\int(\hat{O}\psi)^*\phi dx ,$ 即 $\hat{O}=\hat{O}^+$ ，则称 $\hat{O}$ 为厄米算符。

若 $\hat{A}$ 与 $\hat{B}$ 都是厄米算符，我们有：$(\hat{A}+\hat{B})^+=\hat{A}^++\hat{B}^+=\hat{A}+\hat{B}$，但 $(\hat{A}\hat{B})^+=\hat{B}^+\hat{A}^+=\hat{B}\hat{A}\neq\hat{A}\hat{B}$，**<span style="color:#c211ee">除非 $[\hat{A},\hat{B}]=0$</span>**。

**<span style="color:#ee9622">【厄米算符的期望值】</span>**

(1) 厄米算符的期望值必为实数

> $$
> \overline{A}=\int\psi^*\hat{A}\psi dx =\int(\hat{A}\psi)^*\psi dx =\int\psi(\hat{A}\psi)^*dx =\Big(\int\psi^*\hat{A}\psi dx \Big)^*=\overline{A}^*\\
> \therefore \overline{A} \in \mathbb{R}
> $$

(2) 期望值必为实数的算符是厄米算符

> 取波函数 $\psi+c\phi$,
>
> $$
> \left\{
> \begin{aligned}
> \overline{A}&=\int(\psi+c\phi)^*\hat{A}(\psi+c\phi)dx =\int \psi^*\hat{A}\psi dx + c^*\int\phi^*\hat{A}\psi dx+ c\int\psi^*\hat{A}\phi dx+ |c|^2\int\phi^*\hat{A}\phi dx \\
> \overline{A}^*&=\int [\hat{A}(\psi+c\phi)]^*(\psi+c\phi)dx = \int(\hat{A}\psi)^*\psi dx + c^*\int(\hat{A}\phi)^*\psi dx + c\int(\hat{A}\psi)^*\phi dx + |c|^2\int (\hat{A}\phi)^*\phi dx  \\
> \end{aligned}
> \right.\\
> $$
>
> 取 c = 0, 有:
>
> $$\int\psi^*\hat{A}\psi dx =\int(\hat{A}\psi)^*\psi dx\\
> \therefore c^*\int\phi^*\hat{A}\psi dx+ c\int\psi^*\hat{A}\phi dx = c^*\int(\hat{A}\phi)^*\psi dx + c\int(\hat{A}\psi)^*\phi dx\\$$
>
> $$设：\left\{
> \begin{aligned}
> &a =\int\phi^*\hat{A}\psi dx \\
> &b =\int\psi^*\hat{A}\phi dx \\
> &c =\int(\hat{A}\phi)^*\psi dx \\
> &d =\int(\hat{A}\psi)^*\phi dx \\
> \end{aligned}
> \right., 则：\left\{
> \begin{aligned}
> &a+b = c+d, when(c = 1) \\
> &a-b = c-d, when(c = i)
> \end{aligned}
> \right. , 得\int\psi^*\hat{A}\phi dx =\int(\hat{A}\psi)^*\phi dx, 证毕 .$$

**<span style="color:#ee9622">【厄米算符的本征态】</span>**

(1) 不确定度：$\overline{(\hat{A}-\overline{A})^2}=\int\varphi^*(\hat{A}-\overline{A})^2\varphi dx=\int[(\hat{A}-\overline{A})\varphi]^*(\hat{A}-\overline{A})\varphi dx=\int|(\hat{A}-\overline{A})\varphi|^2dx\geqslant0$。

对于不确定度为 0 的态，$\hat{A}\varphi_n=A_n\varphi_n$​，本征值为其期望态。

(2) 属于不同本征值的本征态正交：

>$$
>\left.
>\begin{aligned}
>\hat{A}\varphi_i = A_i\varphi_i& \\
>\hat{A}\varphi_j = A_j\varphi_j&
>\end{aligned}
>\right\}\int(\hat{A}\varphi_i)^*\varphi_jdx =
>\left\{
>\begin{aligned}
>\int\varphi_i^*\hat{A}\varphi_jdx&= A_j\int\varphi_i^*\varphi_jdx \\
>(A_i)^*\int\varphi_i^*\varphi_jdx&= A_i\int\varphi_i^*\varphi_jdx
>\end{aligned}
>\right.\\$$
>
>$$\Rightarrow (A_i-A_j)\int\varphi_i^*\varphi_jdx = 0 \Rightarrow \int\varphi_i^*\varphi_jdx = 0 ; 除非 A_i = A_j, 与假设不符.$$

(3) 简并度：

厄米算符的同一本征值对应着不同本征态的数目成为该本征值的简并度。

简并的本征态不一定相互正交，但可以通过线性组合生成新的一组简并态，而这些新简并态可以正交归一。

> $$
> 我们有:\hat{A}\varphi_{ni}= A_n\varphi_{ni}(i = 1,2,\dots, f).\int\varphi_{ni}^*\varphi_{ni'}dx = S_{ii'}, 令\psi_{nj}=\sum_{i = 1}^fc_{ji}\varphi_{ni}\\$$
> 
> $$\therefore \int\psi_{nj}^*\psi_{nk}dx =\sum_{i = 1}^f\sum_{i'= 1}^fc_{ji}c_{ki'}\int\varphi_{ni}^*\varphi_{ni'}dx =\sum_{i = 1}^f\sum_{i'= 1}^fc_{ji}c_{ki'}S_{ii'}=\delta_{jk}\\$$
>
> $$\Rightarrow 任意厄米算符的所有本征态组成完备基.$$

(4) 共同本征态：

> $$
> \left\{
> \begin{aligned}
> &[\hat{A},\hat{B}] = 0 \Rightarrow \hat{A}\hat{B}\psi =\hat{B}\hat{A}\psi \\
> &\hat{A}\psi = a\psi
> \end{aligned}
> \right.
> \Rightarrow
> \hat{A}(\hat{B}\psi)=\hat{B}(\hat{A}\psi)=\hat{B}(a\psi)= a(\hat{B}\psi)\\$$
> 
> $$\Rightarrow\hat{B}\psi 也是\hat{A}的本征值为 a 的本征态\Rightarrow\hat{B}\psi = b\psi\Rightarrow \hat{A},\hat{B}具有同样的本征态
> $$

(5) 不确定度关系：

两算符对易则 **<span style="color:red">同时可以有确定值</span>**；反之，则两算符不存在共同本征态，不能同时有确定值。

> 引入实参量 $\xi$ 的辅助积分 $I(\xi)=\int|\xi\hat{A}\psi+i\hat{B}\psi|^2dx \geqslant 0$
>
> $$
> \begin{aligned}
> &(\xi\hat{A}\psi+i\hat{B}\psi,\xi\hat{A}\psi+i\hat{B}\psi)=\xi^2(\psi,\hat{A}^2\psi)+i\xi(\psi, [\hat{A},\hat{B}\psi])+(\psi,\hat{B}^2\psi) \\
> &我们定义\hat{C}= i [\hat{A},\hat{B}], 则原式 =\xi^2\overline{A^2}+\xi\overline{C}+\overline{B^2}= f(\xi) \geqslant 0 \\
> &\therefore f(\xi)_{min}= f(-\frac{\overline{C}}{2\overline{A^2}})=\overline{B^2}-\frac{\overline{C}^2}{4\overline{A^2}} \geqslant 0 \\
> &\Rightarrow \sqrt{\overline{A^2}\overline{B^2}} \geqslant \frac{1}{2}\sqrt{\overline{C}^2}=\frac{1}{2}\bigg|\overline{[\hat{A},\hat{B}]}\bigg| \Rightarrow \Delta A\Delta B \geqslant\frac{1}{2}\bigg|\overline{[\hat{A},\hat{B}]}\bigg|;(if \overline{A}=\overline{B}= 0)\\
> &\Rightarrow \Delta x\Delta p \geqslant \frac{1}{2}\Big|\overline{[\hat{x},\hat{p}]}\Big|=\frac{1}{2}\hbar
> \end{aligned}
> $$

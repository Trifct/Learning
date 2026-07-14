# Chapter 5: 量子演化与绘景

## 含时哈密顿量 (Hamiltonian)

一维：$\hat{H}(t)=\frac{\hat{p}^2}{2m}+V(x,t)=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x,t)$。

$3N$ 维：$\hat{H}(t)=\sum_{i=1}^N{\frac{\hat{p}_i^2}{2m_i}}+V(x_1,x_2,\dots,t)=-\sum_{i=1}^N{-\frac{\hbar^2}{2m_i}\nabla_i^2}+V(x_1,x_2,\dots,t)$。

## 含时薛定谔方程

一维：$i\hbar\frac{\partial\psi(x,t)}{\partial t}=\hat{H}(t)\psi(x,t)$。

$3N$ 维：$i\hbar\frac{\partial\psi(x_1, x_2, \dots, t)}{\partial t}=\hat{H}(t)\psi(x_1, x_2, \dots, t)$。

<span style="color:#c211ee">含时薛定谔方程通常作为量子力学的一个基本原理，实际上与本征态有紧密关联，可以导出各种其他方程，并在特定极限下回到经典力学方程。</span>

<center>
    <h1 style="font-size: 1.5em;color:rgb(255,0,0)"> 量子力学基本假设 3：微观体系波函数随时间的变化遵从含时薛定谔方程 </h1>
</center>


## 含时薛定谔方程的通解

以一维体系为例，若 $\hat{V}$ 不含时，那么含时薛定谔方程为：

$$
i\hbar\frac{\partial\psi(x, t)}{\partial t}=\hat{H}(t)\psi(x, t)=-\frac{\hbar^2}{2m}\frac{\partial^2\psi(x, t)}{\partial x^2}+V(x, t)\psi(x, t)
$$

> <span style="color:#ee9622">假设有一类可分离变量的特解：$\psi_n(x,t)=\phi_n(x)\varphi_n(t)$</span>   <span style="color:#c211ee">【即$\frac{\partial \phi_n}{\partial t}=\frac{\partial \varphi_n}{\partial x}=0$​】</span>
>
> <span style="color:#ee9622">$\therefore$ 通解为：$\psi(x,t)=\sum_nc_n\phi_n(x)\varphi_n(t)$</span>   <span style="color:#c211ee">【即为线性组合】</span>
>
> 让我们将 $\psi_n(x,t)=\phi_n(x)\varphi_n(t)$​ 代入上述含时薛定谔方程：
>
> $$
> \begin{aligned}
> &i\hbar\phi_n(x)\frac{\partial \varphi_n(t)}{\partial t}=-\varphi_n(t)\frac{\hbar^2}{2m}\frac{\partial^2\phi_n(x)}{\partial x^2}+V(x)\phi_n(x)\varphi_n(t)\\
> &\rightarrow 两边同除\phi_n(x)\varphi_n(t):  \\
> & i\hbar\frac{1}{\varphi_n(t)}\frac{\partial \varphi_n(t)}{\partial t}=-\frac{1}{\phi_n(x)}\frac{\hbar^2}{2m}\frac{\partial^2\phi_n(x)}{\partial x^2}+V(x) \\
> & 等式左边仅含 t, 右边仅含 x, 则两边只能同时等于某个常数, 记为 E_n.\\
> &\left\{
> \begin{aligned}
> & i\hbar\frac{\partial \varphi_n(t)}{\partial t}= E_n\varphi_n(t) \Rightarrow \varphi_n(t)= e^{-iE_n(t-t_0)/\hbar} \\
> &-\frac{\hbar^2}{2m}\frac{\partial^2\phi_n(x)}{\partial x^2}+V(x)\phi_n(x)= E_n\phi_n(x)
> \end{aligned}
> \right.
> \end{aligned}
> $$

上述第一个关于 $\varphi_n(t)$ 的方程为相位方程；第二个关于 $\phi_n(x)$ 的方程为定态薛定谔方程，其中 $\phi_n(x)$ 为本征态，$E_n$ 为本征值。

由此我们可以得到，本征态具有确定的能量，相位变化不改变量子系统的本征状态。

> 于是我们得到：$\psi(x,t)=\sum_nc_n\phi_n(x)e^{-iE_n(t-t_0)/\hbar}$。
>
> $$
> \therefore \left\{
> \begin{aligned}
> & i\hbar\frac{\partial \psi}{\partial t}=\sum_n i \hbar c_n\phi_n(x)\frac{\partial}{\partial t}e^{-iE_n(t-t_0)/\hbar}=\sum_nc_nE_n\phi_n(x)e^{-iE_n(t-t_0)/\hbar} \\
> &\hat{H}\phi_n(x)=\sum_nc_n [\hat{H}\phi_n(x)] e^{-iE_n(t-t_0)/\hbar}=\sum_nc_nE_n\phi_n(x)e^{-iE_n(t-t_0)/\hbar}
> \end{aligned}
> \right.\\$$
>
> $$\therefore i\hbar\frac{\partial\psi}{\partial t}=\hat{H}\psi$$
>
> 定态薛定谔方程可以用于求解含时薛定谔方程, 即含时演化自动满足方程.
>
> 同时，若对 $\psi$ 做傅里叶变换，可以得到所有的本征值 $E_n$。

## 本征态的含时演化性质

(1) 概率分布不含时

> $$
> \psi_n(x, t)=\phi_n(x)e^{-iE_n(t-t_0)/\hbar}\Rightarrow|\psi_n|^2 =\phi_n^*\phi_n\times e^{iE_n(t-t_0)/\hbar}e^{-iE_n(t-t_0)/\hbar}=|\phi_n|^2
> $$

(2) 力学量期望值不含时

> $$
> \big < \hat{O}(x,p) \big> =\int dx[\psi_n^*\hat{O}(x,-i\hbar\frac{\partial}{\partial x})\psi]=\int dx(\phi_n^*\hat{O}\phi_n) (未对 t 操作)
> $$

(3) 能量确定

> $$
> \left\{
> \begin{aligned}
> & \big < \hat{H}(x,p) \big> =\int dx(\phi_n^*\hat{H}\phi_n)= E_n\int\phi_n^*\phi_ndx = E_n \\
> & \big < \hat{H}^2(x,p) \big> =\int dx(\phi_n^*\hat{H}\hat{H}\phi_n)= E_n\int dx(\phi_n^*\hat{H}\phi_n)= E_n^2\int\phi_n^*\phi_ndx = E_n^2 \\
> \end{aligned}
> \right.\\$$
>
> $$\therefore \sigma_{H}^2 =\big < (\hat{H}-\big<H\big>)^2 \big >=\big < \hat{H}^2 \big>-2\big <\big<H\big>\hat{H}\big >+\big <\hat{H}\big>^2 =\big <\hat{H}^2\big>-\big <\hat{H}\big>^2 = 0
> $$

## 波函数的表象

**<span style="color:#ee9622">完备基与表象：</span>** 波函数是希尔伯特空间的矢量，使用任意一组完备基均能表示波函数。波函数在某一完备基下的表示，成为该表象下的波函数。

**<span style="color:#ee9622">表象变换：</span>** 所有表象下的波函数相互等价，可以通过基组变换相互转化。

> $$
> \vec{A}= A_x \vec{x}+A_y\vec{y}= A_{x'}\vec{x'}+A_{y'}\vec{y'}\\
> \Rightarrow
> \left\{
> \begin{aligned}
> A_x = A_{x'}\vec{x'}\cdot\vec{x}+A_{y'}\vec{y'}\cdot\vec{x} \\
> A_y = A_{x'}\vec{x'}\cdot\vec{y}+A_{y'}\vec{y'}\cdot\vec{y}
> \end{aligned}
> \right.\Rightarrow
> \begin{pmatrix}
> A_x\\
> A_y
> \end{pmatrix}=\begin{pmatrix}
> \vec{x'}\cdot\vec{x}&\vec{y'}\cdot\vec{x}\\
> \vec{x'}\cdot\vec{y}&\vec{y'}\cdot\vec{y}
> \end{pmatrix}\begin{pmatrix}
> A_{x'}\\
> A_{y'}
> \end{pmatrix}
> $$

## 狄拉克符号

为了寻找不同表象下波函数的共同特点，我们引入 **<span style="color:red">狄拉克符号</span>**。

**<span style="color:#ee9622">左矢 (bra) ：</span>** $\bra{\psi}=\begin{pmatrix} c_1^*&c_2^*&\dots&c_n^* \end{pmatrix}$​，是右矢的转置共轭

**<span style="color:#ee9622">右矢 (ket) ：</span>** $\ket{\psi}=\begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix}$。

> 从而我们有：
>
> $\int\phi_m^*(x)\phi_n(x)dx=\braket{\phi_m|\phi_n}$；
>
> $\big<\hat{O}\big>=\int\psi^*(x)\hat{O}\psi(x)dx=\braket{\psi|\hat{O}|\psi}$​；
>
> 波函数的归一化可写作：$\braket{\psi|\psi}=1$；
>
> 正交归一完备基组：$\braket{\phi_m|\phi_n}=\delta_{mn}$，$\sum_n\ket{\phi_n}\bra{\phi_n}=\hat{I}$，两式等价；
>
> 薛定谔方程：$\frac{\partial\ket{\psi(t)}}{\partial t}=\frac{\hat{H}(t)\ket{\psi(t)}}{i\hbar}$，$\frac{\partial\bra{\psi(t)}}{\partial t}=-\frac{\bra{\psi(t)}\hat{H}(t)}{i\hbar}$​；
>
> 坐标/动量表象：$\ket{\psi(t)}=\int dx \ket{x}\braket{x|\psi(t)}=\int dx \psi(x,t)\ket{x}$（动量即将 $x$ 换成 $p$）.

## 矩阵力学

(1) 波函数的矢量表示：$\ket{\phi}=\sum_n\ket{\phi_n}\braket{\phi_n|\psi}=\sum_nc_n\ket{\phi_n}$；$\bra{\psi}=\sum_n\braket{\psi|\phi_n}\bra{\phi_n}=\sum_nc_n^*\bra{\phi_n}$。

(2) 算符的矩阵表示：

$\hat{A}=\sum_m\sum_n\ket{\phi_m}\bra{\phi_m}\hat{A}\ket{\phi_n}\bra{\phi_n}=\sum_{mn}\ket{\phi_m}A_{mn}\bra{\phi_n}=\sum_{mn}A_{mn}\ket{\phi_m}\bra{\phi_n}$【已令 $\bra{\phi_m}\hat{A}\ket{\phi_n}=A_{mn}$】

$\therefore \hat{A}=\begin{pmatrix} A_{11}&A_{12}&\dots&A_{1N}\\A_{21}&A_{22}&\dots&A_{2N}\\\vdots&\vdots&&\vdots\\A_{N1}&A_{N2}&\dots&A_{NN}\\ \end{pmatrix}$，因而有矩阵的不对易性：$(\hat{A}\hat{B})_{ij}=\sum_k\hat{A}_{ik}\hat{B}_{kj}\neq\sum_k\hat{B}_{ik}\hat{A}_{kj}=(\hat{B}\hat{A})_{ij}$。

## 时间演化算符

时间演化算符 $\hat{U}(t,t_0)$​ 用于给出任意时刻的体系波函数，不依赖于初始波函数，$\ket{\psi(t)}=\hat{U}(t,t_0)\ket{\psi(t_0)}$，显然 $\hat{U}(t_0,t_0)=1$。

时间演化算符具有以下性质：

(1) 幺正性

> $$
> \braket{\psi(t)|\psi(t)}=\bra{\psi(t_0)}\hat{U}^+(t, t_0)\hat{U}(t, t_0)\ket{\psi(t_0)}= 1\Rightarrow\hat{U}^+(t, t_0)\hat{U}(t, t_0)= 1
> $$

(2) 分解律

> $\hat{U}(t_2,t_0)=\hat{U}(t_2,t_1)\hat{U}(t_1,t_0)$，$t_2>t_1>t_0$​。

**<span style="color:#ee9622">时间演化算符的运动方程：</span>**

> $$
> \begin{aligned}
> &\left\{
> \begin{aligned}
> & i\hbar\frac{\partial}{\partial t}\ket{\psi(t)}= i\hbar\frac{\partial}{\partial t}\Big(\hat{U}(t, t_0)\ket{\psi(t_0)}\Big)=\bigg(i\hbar\frac{\partial}{\partial t}\hat{U}(t, t_0)\bigg)\ket{\psi(t_0)} \\
> & \hat{H}\ket{\psi(t)}=\hat{H}\Big(\hat{U}(t, t_0)\ket{\psi(t_0)}\Big)=\Big(\hat{H}\hat{U}(t, t_0)\Big)\ket{\psi(t_0)}
> \end{aligned}
> \right.\\
> &\Rightarrow \bigg [i\hbar\frac{\partial}{\partial t}\hat{U}(t, t_0)-\hat{H}\hat{U}(t, t_0) \bigg]\ket{\psi(t_0)}= 0, 对任意\ket{\psi(t_0)}恒成立 \\
> &\Rightarrow i\hbar\frac{\partial}{\partial t}\hat{U}(t, t_0)=\hat{H}\hat{U}(t, t_0) \\
> \end{aligned}
> $$

若哈密顿量不含时，可解得：$\hat{U}(t,t_0)=e^{-i\hat{H}(t-t_0)/\hbar}$。

若哈密顿量含时，我们有：

$$
\begin{aligned}
&\Big [\hat{H}(t_1),\hat{H}(t_2) \Big] = 0 \Rightarrow \hat{U}(t, t_0)=\exp\bigg [ \frac{1}{i\hbar}\int_{t_0}^t\hat{H}(t')dt' \bigg] \\
&\Big [\hat{H}(t_1),\hat{H}(t_2) \Big]\neq0 \Rightarrow \hat{U}(t, t_0)= 1+\sum_{i = 1}^{+\infty}\int_{t_0}^tdt_1\int_{t_0}^{t_1}dt_2\dots\int_{t_0}^{t_{n-1}}dt_n\hat{H}(t_1)\hat{H}(t_2)\dots\hat{H}(t_n)
\end{aligned}
$$

上式被称为戴森序列，可以对其进行截断处理，常用于含时微扰理论。

因此我们可以定义编时算符：$\hat{T}\left(\hat{H}\left(t_1\right) \hat{H}\left(t_2\right) \ldots \hat{H}\left(t_n\right)\right)=\hat{H}\left(t_{\hat{i}_1}\right) \hat{H}\left(t_{\hat{i}_2}\right) \ldots \hat{H}\left(t_{i_n}\right)$，其中 $t_{i_1}>t_{i_2}>\ldots>t_{i_n}$

$$
\begin{aligned}
\hat{U}\left(t, t_0\right) & = 1+\sum_{n = 1}^{\infty} \frac{1}{n!}\left(\frac{1}{i \hbar}\right)^n \int_{t_0}^t d t_1 \int_{t_0}^t d t_2 \ldots \int_{t_0}^t d t_n \hat{T}\left(\hat{H}\left(t_1\right) \hat{H}\left(t_2\right) \ldots \hat{H}\left(t_n\right)\right) \\
& =\hat{T} \exp \left\{\frac{1}{i \hbar} \int_{t_0}^t \hat{H}(t) d t\right\}
\end{aligned}
$$

## 量子绘景

科学的一个关键要素是可以被验证，而验证需要通过测量实现，可观察量的期望值与此密切相关。波函数与算符是对量子状态和力学量的描述，但 **<span style="color:red">真正关键的是可观察量的期望值及其含时演化</span>**。

$$
\big <\hat{O}\big> =\braket{\psi|\hat{O}|\psi} \rightarrow \frac{d}{dt}\big <\hat{O}\big> =\braket{ \frac{d}{dt}\psi|\hat{O}|\psi}+\braket{\psi|\frac{d}{dt}\hat{O}|\psi}+\braket{\psi|\hat{O}|\frac{d}{dt}\psi}
$$

可观察量期望值的含时演化包括两个部分，分别对应波函数与算符的时间导数。

针对波函数与算符是否含时演化，催生了三种不同的量子绘景，包括算符不含时的薛定谔绘景，波函数不含时的海森堡绘景，以及波函数与算符都含时的相互作用绘景。

### 薛定谔绘景：波函数含时，算符不含时

其期望值演化方程为：

$$
\frac{d}{dt}\langle \hat{O} \rangle = \frac{d}{dt}\braket{\psi_S | \hat{O} | \psi_S} = \bra{\frac{\partial}{\partial t} \psi_S} \hat{O} \ket{\psi_S} + \bra{\psi_S} \hat{O} \ket{\frac{\partial}{\partial t} \psi_S}
$$

上式的下标 $S$​ 代表薛定谔绘景下的含时波函数。

> 由于 $i\hbar \frac{\partial}{\partial t} \ket{\psi_S} = \hat{H} \ket{\psi_S}$ 和 $-i\hbar \frac{\partial}{\partial t} \bra{\psi_S} = \bra{\psi_S} \hat{H}$，可以得到：
>
> $$
> \begin{aligned}
> \frac{d}{dt}\langle \hat{O} \rangle &= \frac{1}{i\hbar} \left [ -\braket{\psi_S | \hat{H}\hat{O} | \psi_S} + \braket{\psi_S | \hat{O}\hat{H} | \psi_S} \right] \\
> &= \frac{1}{i\hbar} \braket{\psi_S | [ \hat{O}, \hat{H} ] | \psi_S}
> \end{aligned}
> $$
>
> 因此
>
> $$
> \frac{d}{dt}\langle \hat{O} \rangle = \frac{1}{i\hbar} \braket{\psi_S |[ \hat{O}, \hat{H} ] | \psi_S}
> $$
>
> **<span style="color:red">对哈密顿量对易的算符，其期望值不含时变化。</span>**

### 海森堡绘景：波函数不含时，力学量算符含时

在薛定谔绘景中：

$$
\begin{aligned} \langle \hat{O}(t) \rangle &= \langle \psi_S(t) | \hat{O} | \psi_S(t) \rangle \\ &= \langle \psi_S(t_0) | \hat{U}^+(t, t_0) \hat{O} \hat{U}(t, t_0) | \psi_S(t_0) \rangle \\ &= \langle \psi_S(t_0) | \hat{U}^+(t, t_0) \hat{O} \hat{U}(t, t_0) | \psi_S(t_0) \rangle \end{aligned}
$$

在海森堡绘景中：

$$ \langle \hat{O}(t) \rangle = \langle \psi_H(t) | \hat{O}_H | \psi_H(t) \rangle $$

下标 $H$ 代表海森堡绘景

所有的 $\hat{O}_H = \hat{U}^+(t,t_0) \hat{O} \hat{U}(t,t_0) = e^{i\hat{H}(t-t_0)/\hbar} \hat{O} e^{-i\hat{H}(t-t_0)/\hbar}$

海森堡方程:

$$
\begin{aligned}
\frac{d}{dt}\hat{O}_H &= \frac{d}{dt}\left( e^{i\hat{H}(t-t_0)/\hbar}\hat{O}_S e^{-i\hat{H}(t-t_0)/\hbar} \right) \\
&= \frac{i}{\hbar}\hat{H}\hat{O}_H - \frac{i}{\hbar}\hat{O}_H\hat{H} = \frac{i}{\hbar}[{\hat{H}},\hat{O}_H] = \frac{1}{i\hbar}[\hat{O}_H,{\hat{H}}]\\
\Rightarrow \frac{d}{dt}\langle \hat{O}_H \rangle &= \frac{1}{i\hbar} \langle [ \hat{O}_H, \hat{H} ] \rangle \end{aligned}
$$

### 相互作用绘景：波函数与算符都含时

 若体系哈密顿量可写为 $\hat{H} = \hat{H}_0 + \hat{V}$，并定义如下含时波函数和算符：

$$
\begin{aligned}
&\begin{aligned}
\langle \hat{O}(t) \rangle &= \bra{\psi_S(t_0)} e^{i\hat{H}(t-t_0)/\hbar} e^{-i\hat{H}_0(t-t_0)/\hbar} e^{i\hat{H}_0(t-t_0)/\hbar} \hat{O} e^{-i\hat{H}_0(t-t_0)/\hbar} e^{i\hat{H}_0(t-t_0)/\hbar} e^{-i\hat{H}(t-t_0)/\hbar} \ket{\psi_S(t_0)} \\
&= \bra{\psi_I(t)} \hat{O}_I \ket{\psi_I(t)}
\end{aligned}\\
&\Rightarrow
\begin{cases}
\psi_I(t) = e^{i\hat{H}_0(t-t_0)/\hbar} e^{-i\hat{H}(t-t_0)/\hbar} \psi_S(t_0) = e^{i\hat{H}_0(t-t_0)/\hbar} \psi_S(t) \\
\hat{O}_I(t) = e^{i\hat{H}_0(t-t_0)/\hbar} \hat{O} e^{-i\hat{H}_0(t-t_0)/\hbar}
\end{cases}
\end{aligned}
$$

> 我们可以得到波函数和算符的运动方程：
>
> $$
> \begin{aligned}
> \frac{d}{dt}\hat{O}_I(t) &= \frac{d}{dt}\left [ e^{i\hat{H}_0/\hbar (t-t_0)} \hat{O} e^{-i\hat{H}_0/\hbar (t-t_0)} \right] \\ &= \frac{1}{i\hbar} \left [ \hat{O}_I, \hat{H}_0 \right] \end{aligned}
> $$
>
> $$
> \begin{aligned}  \frac{d}{dt}\psi_I(t) &= \frac{d}{dt}\left[ e^{i\hat{H}_0(t-t_0)/\hbar} e^{-i\hat{H}(t-t_0)/\hbar} \psi_S(t_0) \right] \\ &= \frac{1}{i\hbar} e^{i\hat{H}_0(t-t_0)/\hbar} (\hat{H} - \hat{H}_0) e^{-i\hat{H}(t-t_0)/\hbar} \psi_S(t_0) \\ &= \frac{1}{i\hbar} e^{i\hat{H}_0(t-t_0)/\hbar} \hat{V} e^{-i\hat{H}_0(t-t_0)/\hbar} e^{i\hat{H}_0(t-t_0)/\hbar} e^{-i\hat{H}(t-t_0)/\hbar} \psi_S(t_0) \\ &= \frac{1}{i\hbar} \hat{V}_I(t) \psi_I(t) \end{aligned}
> $$

## 传播子

假设哈密顿量 $\hat{H}$ 的本征态完备且已知 $\hat{H}\ket{\phi_n} = E_n\ket{\phi_n}$，通过本征态的完备性（$\sum_n\ket{\phi_n}\bra{\phi_n} = \hat{I}$），可以得到如下关系：

$$
\ket{\psi(t)} = \hat{U}(t,0)\ket{\psi(0)} = \sum_n\ket{\phi_n}\bra{\phi_n}\exp\left(\frac{\hat{H}t}{i\hbar}\right)\ket{\psi(0)}
= \sum_n\ket{\phi_n}\braket{\phi_n|\psi(0)}\exp\left(\frac{E_nt}{i\hbar}\right)\\$$

$$\Rightarrow\psi(x, t) = \braket{x|\psi(t)} = \sum_n\braket{x|\phi_n}\braket{\phi_n|\psi(0)}\exp\left(\frac{E_nt}{i\hbar}\right) = \sum_n\phi_n(x)c_n(0)\exp\left(\frac{E_nt}{i\hbar}\right)
$$

其中 $\phi_n(x) = \braket{x|\phi_n}$（本征态的坐标表象），系数 $c_n(0) = \braket{\phi_n|\psi(0)}$。

利用坐标表象的完备性（$\int dx'\ket{x'}\bra{x'} = \hat{I}$），系数可写为：

$$
c_n(0) = \braket{\phi_n|\psi(0)} = \int dx'\braket{\phi_n|x'}\braket{x'|\psi(0)} = \int dx'\phi_n^*(x')\psi(x',0)
$$

将系数代入波函数表达式，交换求和与积分顺序，得：

$$
\begin{aligned}
\psi(x, t) &= \sum_n\phi_n(x)\left[\int dx'\phi_n^*(x')\psi(x',0)\right]\exp\left(\frac{E_nt}{i\hbar}\right) \\
&= \int dx'\left[\sum_n\phi_n(x)\phi_n^*(x')\exp\left(\frac{E_nt}{i\hbar}\right)\right]\psi(x',0)
\end{aligned}
$$

定义 **<span style="color:#ee9622">传播子</span>** $K(x,t;x',0) = \sum_n\phi_n(x)\phi_n^*(x')\exp\left(\frac{E_nt}{i\hbar}\right)$，则波函数可表示为：

$$
\psi(x, t) = \int dx' K(x, t; x',0)\psi(x',0)
$$

> 具体展开，
>
> $$
> \begin{aligned}
> K(x, t; x_0, t_0) &= \sum_n\phi_n(x)\phi_n^*(x_0)\exp\left(\frac{E_n(t-t_0)}{i\hbar}\right)=\sum_n\braket{x|\phi_n}\braket{\phi_n|x_0}\exp\left(\frac{E_n(t-t_0)}{i\hbar} \right)\\
> &= \sum_n\braket{x|\exp\left(\frac{\hat{H}(t-t_0)}{i\hbar}\right)|\phi_n}\braket{\phi_n|x_0}=\braket{x|\exp\left(\frac{\hat{H}(t-t_0)}{i\hbar}\right)|x_0}=\braket{x, t|x_0, t_0}\\
> &=\int dx_1 \braket{x, t|x_1, t_1}\braket{x_1, t_1|x_0|t_0} \left(t > t_1 > t_0\right)\\
> &\Rightarrow K(x, t; x_0, t_0)=\int dx_N \int dx_{N-1}\dots\int dx_1 \braket{x, t|x_N|t_N}\braket{x_N, t_N|x_{N-1}|t_{N-1}}\dots\braket{x_1, t_1|x_0|t_0}
> \end{aligned}
> $$
>
> 通过对所有可能的路径求和可以计算任意时间和坐标间的传播子。

## 量子状态的密度矩阵描述

**<span style="color:#ee9622">密度矩阵：</span>**

$$
\begin{aligned}
\braket{\hat{O}} &=\braket{\psi|\hat{O}|\psi}=\bra{\psi}\sum_m\ket{\phi_m}\bra{\phi_m}\hat{O}\sum_n\ket{\phi_n}\braket{\phi_n|\psi} \\
&=\sum_{mn}\braket{\psi|\phi_m}\braket{\phi_m|\hat{O}|\phi_n}\braket{\phi_n|\psi}=\sum_{mn}\braket{\phi_n|\psi}\braket{\psi|\phi_m}\braket{\phi_m|\hat{O}|\phi_n} \\
&=\sum_{mn}\braket{\phi_n|\hat{\rho}|\phi_m}\braket{\phi_m|\hat{O}|\phi_n}=\sum_n\braket{\phi_n|\hat{\rho}\hat{O}|\phi_n}\equiv Tr(\hat{\rho}\hat{O}) \\
\end{aligned}
$$

**<span style="color:#ee9622">刘维尔方程：</span>**

$$
\begin{aligned}
&\frac{\partial\ket{\psi}}{\partial t}=\frac{\hat{H}}{i\hbar}\ket{\psi},\frac{\partial\bra{\psi}}{\partial t}=-\frac{\bra{\psi}\hat{H}}{i\hbar}\\
&\Rightarrow \frac{\partial(\ket{\psi}\bra{\psi})}{\partial t}=\frac{\partial\ket{\psi}}{\partial t}\bra{\psi}+\ket{\psi}\frac{\partial \bra{\psi}}{\partial t} =\frac{\hat{H}}{i\hbar}\ket{\psi}\bra{\psi}+\ket{\psi}\left(-\frac{\bra{\psi}\hat{H}}{i\hbar}\right)
\end{aligned}
$$

因而我们定义 **密度矩阵** $\hat{\rho}=\ket{\psi}\bra{\psi}$ ，则有 $\frac{\partial \hat{\rho}}{\partial t}=\frac{1}{i\hbar}\left[\hat{H},\hat{\rho} \right]$，称为刘维尔方程。

**<span style="color:#ee9622">纯态与混合态：</span>**

纯态指满足态叠加原理的态，属于纯量子力学的状态，对于态 $\ket{\psi}=\sum_ic_i\ket{\phi_i}$，密度矩阵元为 $\rho_{ij}=\braket{\phi_i|\psi}\braket{\psi|\phi_j}=c_ic_j^*$。

混合态是一个系综统计概念，若子系统为态 $\ket{\psi_k}$ 的概率为 $P_k$ ，我们有密度矩阵元为 $\rho_{ij}=\sum_kP_k\rho_{ij}^{(k)}=\sum_kP_kc_i^{(k)}c_j^{(k)*}$，其运动方程仍然满足刘维尔方程 $\frac{\partial \hat{\rho}}{\partial t}=\frac{1}{i\hbar}\left[\hat{H},\hat{\rho} \right]$。

混合态常用于描述有限温度下各态的统计分布及其演化。

<span style="color:#c211ee">纯态可以用波函数和密度矩阵描述，但混合态只能用密度矩阵描述，密度矩阵和刘维尔方程比波函数和薛定谔方程具有更普遍的意义。</span>
